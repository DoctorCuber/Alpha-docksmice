using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Discord;
using Discord.Commands;
using Discord.WebSocket;
using Microsoft.Extensions.DependencyInjection;

namespace DocksMiceDisk
{
    class Program
    {
        //Runs the bot.
        private DiscordSocketClient client;
        private CommandService commands;
        private IServiceProvider services;
        static void Main(string[] args) => new Program().RunBotAsync().GetAwaiter().GetResult();
        public async Task RunBotAsync()
        {
            client = new DiscordSocketClient();
            commands = new CommandService();
            services = new ServiceCollection()
                .AddSingleton(client)
                .AddSingleton(commands)
                .BuildServiceProvider();

            string token = "NzYyNzQ3OTA2OTMwNTA3Nzg2.X3tqWA.T3QkOZgvIl0SJTFjnfQHfY-JHO4";
            client.Log += Client_Log;

            await RegisterCommandsAsync();
            await client.LoginAsync(TokenType.Bot, token);

            await client.StartAsync();
            await Task.Delay(-1);
        }

        private Task Client_Log(LogMessage arg)
        {
            Console.WriteLine(arg);
            return Task.CompletedTask;
        }

        public async Task RegisterCommandsAsync() 
        {
            client.MessageReceived += HandleCommandAsync;
            await commands.AddModulesAsync(System.Reflection.Assembly.GetEntryAssembly(), services);
        }

        private async Task HandleCommandAsync(SocketMessage arg)
        {
            var message = arg as SocketUserMessage;
            var context = new SocketCommandContext(client, message);
            if (message.Author.IsBot) return;

            int argPos = 0;
            if (message.HasStringPrefix("//", ref argPos))
            {
                var result = await commands.ExecuteAsync(context, argPos, services);
                if (!result.IsSuccess) Console.WriteLine(result.ErrorReason);
                if (result.Error.Equals(CommandError.UnmetPrecondition)) await message.Channel.SendMessageAsync(result.ErrorReason);
            }
        }
    }
}
