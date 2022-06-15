// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
  const quotes =
      ['About 99% of the time, the right time is right now.', 
        
        'Dont ever work for someone you dont want to become.',        
        'Anything you say before the word “but” does not count.',
        
        'When you forgive others, they may not notice, but you will heal. Forgiveness is not something we do for others; it is a gift to ourselves.',
                    
        'Efficiency is highly overrated; Goofing off is highly underrated. Regularly scheduled sabbaths, sabbaticals, vacations, breaks, aimless walks and time off are essential for top performance of any kind. The best work ethic requires a good rest ethic.',
        
        'When you lead, your real job is to create more leaders, not more followers.',
        
        'Criticize generally, compliment specifically',
        
        'Life lessons will be presented to you in the order they are needed. Everything you need to master the lesson is within you. Once you have truly learned a lesson, you will be presented with the next one. If you are alive, that means you still have lessons to learn.',
        
        'It is the duty of a student to get everything out of a teacher, and the duty of a teacher to get everything out of a student.',
                        
        'Productivity is often a distraction. Don’t aim for better ways to get through your tasks as quickly as possible, rather aim for better tasks that you never want to stop doing.',
        
        'Immediately pay what you owe to vendors, workers, contractors. They will go out of their way to work with you first next time.',
                
        'Your growth as a conscious being is measured by the number of uncomfortable conversations you are willing to have.',
        
        'Speak confidently as if you are right, but listen carefully as if you are wrong.',
        
        'Handy measure: the distance between your fingertips of your outstretched arms at shoulder level is your height.',
        
        'The consistency of your endeavors (exercise, companionship, work) is more important than the quantity. Nothing beats small things done every day, which is way more important than what you do occasionally.',
        
        'Making art is not selfish; it’s for the rest of us. If you don’t do your thing, you are cheating us.',
                
        'Three things you need: The ability to not give up something till it works, the ability to give up something that does not work, and the trust in other people to help you distinguish between the two.',
        
        'When public speaking, pause frequently. Pause before you say something in a new way, pause after you have said something you believe is important, and pause as a relief to let listeners absorb details.',
        
        'There is no such thing as being “on time.” You are either late or you are early. Your choice.',
        
        'Ask anyone you admire: Their lucky breaks happened on a detour from their main goal. So embrace detours. Life is not a straight line for anyone.',
                                
        'Don’t wait for the storm to pass; dance in the rain.',
        
        'When checking references for a job applicant, employers may be reluctant or prohibited from saying anything negative, so leave or send a message that says, “Get back to me if you highly recommend this applicant as super great.” If they don’t reply take that as a negative.',
                
        'Half the skill of being educated is learning what you can ignore.',
        
        'The advantage of a ridiculously ambitious goal is that it sets the bar very high so even in failure it may be a success measured by the ordinary.',
        
        'A great way to understand yourself is to seriously reflect on everything you find irritating in others.',
                
        'Denying or deflecting a compliment is rude. Accept it with thanks, even if you believe it is not deserved.',
                        
        'What you do on your bad days matters more than what you do on your good days.',
        
        'Make stuff that is good for people to have.',
        
        'When you open paint, even a tiny bit, it will always find its way to your clothes no matter how careful you are. Dress accordingly.',
                        
        'When you don’t know how much to pay someone for a particular task, ask them “what would be fair” and their answer usually is.',
                
        'You will be judged on how well you treat those who can do nothing for you.',
        
        'We tend to overestimate what we can do in a day, and underestimate what we can achieve in a decade. Miraculous things can be accomplished if you give it ten years. A long game will compound small gains to overcome even big mistakes.',
        
        'Thank a teacher who changed your life.',
        
        'You cant reason someone out of a notion that they didn’t reason themselves into.',
        
        'Your best job will be one that you were unqualified for because it stretches you. In fact only apply to jobs you are unqualified for.',
                        
        'A wise man said, “Before you speak, let your words pass through three gates. At the first gate, ask yourself, “Is it true?” At the second gate ask, “Is it necessary?” At the third gate ask, “Is it kind?”',
        
        'Take the stairs.',
                
        'When you arrive at your room in a hotel, locate the emergency exits. It only takes a minute.',
        
        'When you feel overwhelmed of weighing pros and cons, first tackle the question of “who should I become?”', 
        
        'Average returns sustained over an above-average period of time yield extraordinary results. Buy and hold.',
                        
        'Art is whatever you can get away with.',
        
        'For the best results with your children, spend only half the money you think you should, but double the time with them.',
        
        'Purchase the most recent tourist guidebook to your home town or region. You’ll learn a lot by playing the tourist once a year.',
                        
        'Prescription for popular success: do something strange. Make a habit of your weird.',
        
        'Be a pro. Back up your back up. Have at least one physical backup and one backup in the cloud. Have more than one of each. How much would you pay to retrieve all your data, photos, notes, if you lost them? Backups are cheap compared to regrets.',
                        
        'The optimal balance for exploring new things vs exploiting them once found is: 1/3. Spend 1/3 of your time on exploring and 2/3 time on deepening. It is harder to devote time to exploring as you age because it seems unproductive, but aim for 1/3.',
        
        'Actual great opportunities do not have “Great Opportunities” in the subject line.',
        
        'When introduced to someone make eye contact and count to 4. You’ll both remember each other.',
                
        'When you are stuck, explain your problem to others. Often simply laying out a problem will present a solution. Make “explaining the problem” part of your troubleshooting process.',
                
        'Your group can achieve great things way beyond your means simply by showing people that they are appreciated.',
                        
        'When speaking to an audience it’s better to fix your gaze on a few people than to “spray” your gaze across the room. Your eyes telegraph to others whether you really believe what you are saying.',
        
        'Habit is far more dependable than inspiration. Make progress by making habits. Dont focus on getting into shape. Focus on becoming the kind of person who never misses a workout.',
        
        'When you set your mind to something, sometimes it will take 1 more year than you expect. Be patient.',        
        'You see only 2% of another person, and they see only 2% of you. Attune yourselves to the hidden 98%.',
                
        'Our descendants will achieve things that will amaze us, yet a portion of what they will create could have been made with today’s materials and tools if we had had the imagination. Think bigger.',
        
        'For a great payoff be especially curious about the things you are not interested in.',
                
        'Every breakthrough is at first laughable and ridiculous. In fact if it did not start out laughable and ridiculous, it is not a breakthrough.',
                                
        'Rather than steering your life to avoid surprises, aim directly for them.',
                        
        'Aim to die broke. Give to your beneficiaries before you die; it’s more fun and useful. Spend it all. Your last check should go to the funeral home and it should bounce.',
        
        'The chief prevention against getting old is to remain astonished.',];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}
