using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Discord.Commands;
using Discord;
using Discord.WebSocket;

namespace DocksMiceFRr.Modules
{
    public class Commands : ModuleBase<SocketCommandContext>
    {

        [Command("ping")]
        public async Task Pong()
        {
            await ReplyAsync("Pong");
            await ReplyAsync("https://giphy.com/gifs/cat-animal-ping-pong-fvA1ieS8rEV8Y");
        }
        [Command("userinfo")]
        public async Task UserInfoAsync(IUser user = null)
        {
            user = user ?? Context.User;
            await ReplyAsync(user.ToString());
        }
        [Command("hail")]
        public async Task SSS()
        {
            await ReplyAsync("All Hail Papinks"); await ReplyAsync("All Hail Papinks");
            await ReplyAsync("All Hail Papinks"); await ReplyAsync("All Hail Papinks");
            await ReplyAsync("All Hail Papinks"); await ReplyAsync("All Hail Papinks");
            await ReplyAsync("All Hail Papinks"); await ReplyAsync("All Hail Papinks");
            await ReplyAsync("All Hail Papinks"); await ReplyAsync("All Hail Papinks");
            await ReplyAsync("All Hail Papinks"); await ReplyAsync("All Hail Papinks");
        }
        [Command("tzu")]
        public async Task Tzu()
        {
            var random = new Random();
            var Quites = new List<string> { "The supreme art of war is to subdue the enemy without fighting.", "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.", "There is no instance of a nation benefitting from prolonged warfare.", "The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy.", "Opportunities multiply as they are seized." };
            int index = random.Next(Quites.Count);
            await ReplyAsync(Quites[index]);
        }
        [Command("Ruwill")]
        public async Task HahaMEME()
        {
            await ReplyAsync("https://media.giphy.com/media/1zkrFapfiCphgvpu3J/giphy.gif");
            await ReplyAsync("U LIKE THIS HUH");
            await ReplyAsync("HUH HOW WHAT U CAN DO IT");
        }
        [Command("Nitro")]
        private async Task Rickroll()
        {
            var lol = new Random();
            var Nitros = new List<string> { "https://discordgift.site/c/freenitro", "https://discordgift.site/tLKItricEIi6qiFl" };
            int index = lol.Next(Nitros.Count);
            await ReplyAsync(Nitros[index]);
        }
        [Command("SB")]

        public async Task HEHE()
        {
            await ReplyAsync("ur mom ur mommy is calling for u you should go and talk to her and get ur food");
        }
        [Command("ban")]
        [RequireUserPermission(GuildPermission.BanMembers, ErrorMessage = "You don't have the permission ``ban_member``!")]
        public async Task BanMember(IGuildUser user = null, [Remainder] string reason = null)
        {
            if (user == null)
            {
                await ReplyAsync("Please specify a user!");
                return;
            }
            if (reason == null) reason = "Not specified";

            await Context.Guild.AddBanAsync(user, 1, reason);
            await ReplyAsync($":white_check_mark: {user.Mention}was banned\n** Reason** { reason}");
        }

        [Command("Kick")]
        [RequireUserPermission(GuildPermission.KickMembers, ErrorMessage = "You don't have the permission ``kick_member``!")]
        public async Task KickMember(IGuildUser user = null, [Remainder] string reason = null)
        {
            if (user == null)
            {
                await ReplyAsync("Please specify a user!");
                return;
            }
            if (reason == null) reason = "Not specified";

            await Context.Guild.AddBanAsync(user, 1, reason);
            await ReplyAsync($":white_check_mark: {user.Mention}was Kicked\n** Reason** { reason}");
        }

        [Command("Tru")]
        public async Task lostMoney()
        {
            await ReplyAsync("https://www.youtube.com/watch?v=jgvTrcAPpO0&ab_channel=DanielThrasher");
        }
        //[Command("clear")]
        //private async Task clear(int amount = 0)
        //{
        //    await Context.Guild.DeleteAsync();
        //    await ReplyAsync("Cleared!:ballot_box_with_check:");
        //}
    }
}
