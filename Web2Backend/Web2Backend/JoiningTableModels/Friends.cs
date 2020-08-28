using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.JoiningTableModels
{
    public class Friends
    {
        public int User1 { get; set; }
        public int User2 { get; set; }
        public Relationship FriendStatus { get; set; }

        /// <summary>
        /// User that sent the last action
        /// ie: 1 sends friends request to 2
        /// table looks like: 1 2 PENDING 1
        /// </summary>
        public int UserPerformedAction { get; set; }
    }

    public enum Relationship
    {
        NotFriends = 0,
        Pending = 1,
        Friends = 2,
    }
}
