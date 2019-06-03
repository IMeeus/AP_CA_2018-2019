using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FanTheoryAPI.Model
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Theories.Any())
            {
                Theory firstTheory = new Theory()
                {
                    ImdbID = "tt4154756",
                    Writer = "willyolio",
                    Title = "Quill didn't screw up",
                    Description = "One of the biggest dramatic moments in the film was when they almost stopped Thanos by taking his glove. Then Quill loses his temper.Out of 14 million possible timelines, it's impossible that Dr. Strange didn't see that coming. If that was the path to victory, stopping Quill for a few seconds would have been easy.Therefore, taking off the glove was even worse.Therefore, what Quill did was necessary.What did he really do? He reminded Thanos about Gamorra while he was emotionally vulnerable.Then, in an extremely short time frame, Strange lets Thanos finish the collection and perform the snap.If he arrived on Earth later, the mind Stone would have already been destroyed. Perhaps with the time Stone he could still have taken it, but with much greater effort.Strange actually needed Thanos to take the Stone as early as possible while emotionally vulnerable, and sincerely believe Strange wasn't playing tricks.In short, everyone is being distracted by the gauntlet. The most important thing in this scene is not the gauntlet. It's Mantis+Quill opening up Thanos's emotions. The gauntlet is just a distraction.The snap was always going to happen. But this is still the best possible outcome. If they had delayed the snap, Thanos would have had more time to come to terms with Gamorra's death. He would have no regrets.I think in Avengers 4, Thanos is regretting his decision. He wants Gamorra back, but it's conflicting with his sense of 'fairness'. The main conflict should be convincing Thanos to bring Gamorra back to life, which opens up the possibility of bringing others back. There is absolutely no other way for a reversal to happen. Any team that they try to form to fight Thanos again can just be snapped out of existence. For him to lose any fight while wielding the complete gauntlet would be the jobbiest job in all of jobbing history. The only way for it to happen is for Thanos to want it himself. That's the 1 in 14 million, and Quill+Mantis+Strange planted the seeds of regret.",
                    Comments = new List<Comment>()
                };

                Comment firstComment = new Comment()
                {
                    Writer = "shoe710",
                    Text = "Yeah 100% we are still in the middle of the eventually winning path. Stark had to live, Strange had to hand over the stone, and they had to take this loss as part of the timeline they eventually win in. Even when strange tells them theres only 1 chance to win, you can see in his expression that hes like 'and its a ROUGH fuckin path to take...'",
                    MovieTheory = firstTheory
                };

                Comment secondComment = new Comment()
                {
                    Writer = "GoodOlSpence",
                    Text = "I think you're right because giving the stone to Thanos to save Tony made no sense and he says something like 'There was no other way.' as he crumbles away.",
                    MovieTheory = firstTheory
                };

                firstTheory.Comments.Add(firstComment);
                firstTheory.Comments.Add(secondComment);

                Theory secondTheorie = new Theory()
                {
                    ImdbID = "tt1375666",
                    Writer = "aRandomGuyyy",
                    Title = "The only inception theory that makes sense to me",
                    Description = "Basically, the only idea that makes sense is that only Cobb and Satio end up in LIMBO. Fischer and Ariadne were never there. This is because you'd have to die in order to end up in Limbo.. right? If Fischer had died in the fortress, he would've gone to limbo, a state of total dreamworld and subconsciousness. The only way for Cobb and Ariadne to reach him would've been to also die, but they simply enter Cobb's dream by falling asleep (the one with the falling buildings), this therefore can't be limbo as they didn't die to reach there. The only possible explanation to me - and please tell me if I missed something - is that Fischer is merely Cobb's projection in the world with falling buildings (aka Cobb's dream) designed to keep Ariadne distracted as he tried to save Satio. He tries to save Satio by getting stabbed in his dream by Mal and therefore entering the REAL Limbo state, where he finds Satio as an old man (since Satio died a few seconds before Cobb, he appears much older here).",
                    Comments = new List<Comment>()
                };

                Comment thirdComment = new Comment()
                {
                    Writer = "One_Winged_Rook",
                    Text = "Yea... the 'falling buildings' place wasn’t limbo... it was Cobb’s dream. That’s not fan theory...that’s what happened.",
                    MovieTheory = secondTheorie
                };

                Comment fourthComment = new Comment()
                {
                    Writer = "DemoCrab",
                    Text = "My theory is that Limbo isn't a different level of dream, it's simply the point where the time difference becomes so great that you basically end up living an entire life in dreamland.",
                    MovieTheory = secondTheorie
                };

                secondTheorie.Comments.Add(thirdComment);
                secondTheorie.Comments.Add(fourthComment);

                context.Theories.Add(firstTheory);
                context.Theories.Add(secondTheorie);
                context.Comments.Add(firstComment);
                context.Comments.Add(secondComment);
                context.Comments.Add(thirdComment);
                context.Comments.Add(fourthComment);
                context.SaveChanges();
            }
        }
    }
}
