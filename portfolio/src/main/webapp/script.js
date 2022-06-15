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
        ];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}
