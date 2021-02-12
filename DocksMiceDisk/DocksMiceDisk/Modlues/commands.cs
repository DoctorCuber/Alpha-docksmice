using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Discord.Commands;
using Discord;
using Discord.WebSocket;
using Microsoft.Extensions.DependencyInjection;

namespace DocksMiceDisk.Modlues
{
    public class commands : ModuleBase<SocketCommandContext>
    {
        //responds with Pong
        [Command("Ping")]
        public async Task Ping()
        {
            await ReplyAsync("Pong from Tej!");
        }

        //this is for ban 
        [Command("ban")]
        [RequireUserPermission(GuildPermission.BanMembers, ErrorMessage = "Sorry you can't do that")]
        public async Task BanMember(Discord.IGuildUser user = null, [Remainder] string reason = null)
        {
            if (user == null)
            {
                await ReplyAsync("Unable to Process Task. Please specify a user"); 
                return;
            }
            if (reason == null) 
                reason = "Not Specified";
            await Context.Guild.AddBanAsync(user, 100, reason);
            var EmbedBuilder = new EmbedBuilder()
                .WithDescription($":white_check_mark:{user.Mention} was Banned\n**Reason:**{reason}");
            Embed embed = EmbedBuilder.Build();
            await ReplyAsync(embed: embed);
            await ReplyAsync("https://giphy.com/gifs/H99r2HtnYs492");

        }

        // Get info on a user, or the user who invoked the command if one is not specified
        [Command("userinfo")]
        public async Task UserInfoAsync(IUser user = null)
        {
            user = user ?? Context.User;

            await ReplyAsync(user.ToString());
        }

    }
}
