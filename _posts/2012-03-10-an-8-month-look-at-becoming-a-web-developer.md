---
layout: post
title: 'An 8 month look at becoming a web developer'
description: "'You definitely have the aptitude for it. You should learn to code.' These two sentences have controlled my personal and occupational activity for the last eight months."
author: "Aaron Williams"
email: "aaron@aboutaaron.com"
---

<blockquote>"You definitely have the aptitude for it. You should learn to code."</blockquote>
These two sentences have controlled my personal and occupational activity for the last eight months.

Back in May, I attended the <a href="http://nola11.nytimes-institute.com/">New York Times Student Journalism Institute</a>, a two-week program where young journalists of color received training from Times Company journalists. <a href="http://twitter.com/#!/pilhofer">Aron Pilhofer</a>, Interactive News Editor at the New York Times and co-founder of DocumentCloud, was my assigned editor.

I asked him to teach me anything about web development and he kicked it off with this:
<pre>$ bash -s stable &lt;</pre>
That's the bash script to install <a href="https://rvm.io/">RVM</a>. It was daunting at first, but I felt like I was hacking the planet. He also made me change my terminal to the home-brew theme.

Then it was Rails time.
<pre>class ClientsController &lt; ApplicationController
  def new
  end
end</pre>
Watching him create web apps from the command line was one of the most enthralling things I had ever seen. It was like learning how to cast magic.

Flying back home to San Francisco, I couldn't get Pilhofer's call to code out my head. I panicked because I was close to graduating from San Francisco State University with a degree in Journalism, but I realized I wanted to start computer programming. Every intro to computer science course at SF State required calculus prerequisites, which I didn't have time to do. I had enough time to pick up a second minor and thought I could do web design and at least learn front-end basics. However, due to budget cuts, the design department removed the minor.

I loved journalism, but I wanted to build tools to encourage and develop it. I wanted to be a news developer, but my department didn't teach the skills I needed to become one. I thought about grad school, but that would be another two years of school without actually working in the real world, and an extra $50,000 to $80,000 in debt.

I decided that if I wanted to learn these skills, I couldn't wait on my school to catch up or hope that my master's degree would teach them to me. So, I went to Amazon.com and purchased several books:
<ul>
	<li>XHTML and CSS fundamentals</li>
	<li><a href="http://www.amazon.com/Calculus-Made-Silvanus-Phillips-Thompson/dp/1456531980/ref=sr_1_4?s=books&amp;ie=UTF8&amp;qid=1336668963&amp;sr=1-4">Calculus Made Easy</a> by Silvanus Thompson (didn't end up finishing, but interesting nonetheless)</li>
	<li><a href="http://pine.fm/LearnToProgram/">Learn to Program</a> by Chris Pine (link to free e-book)</li>
	<li><a href="http://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758/ref=sr_1_1?ie=UTF8&amp;qid=1336668918&amp;sr=8-1">Don't Make Me Think</a> by Steve Krug</li>
</ul>
As the summer went on, I also ended up purchasing:
<ul>
	<li><a href="http://www.abookapart.com/products/responsive-web-design">Responsive Web Design</a></li>
	<li><a href="http://www.amazon.com/Learning-PHP-MySQL-JavaScript-Step-By-Step/dp/0596157134/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1336669021&amp;sr=1-1">Learning PHP, MySQL, and JavaScript</a> by Robin Nixon</li>
</ul>
I went through Learn to Program first. I found the book pretty easy to follow, and though the math parts took some extra reading, I was able to traverse the book fairly quickly.

As a result of that book, I made a quick program to calculate coffee doses for when I grind coffee in the morning.
<pre>puts
puts 'Welcome to Aaron\'s coffee dosage module'
puts 'I will give you the amount of coffee you need'
puts 'based on the amount of water you provide'
puts
puts '*REMEMBER* this is all in grams!'
puts
puts 'What amount of water are you using?'
water = gets.chomp
puts
puts 'CALCULATING...'
puts
puts 'If you\'re using '+ water + 'g of water, you\'ll need'
puts
puts (water.to_i/10.9).to_s + 'g of coffee.'
puts
puts'Thank you for using my coffee calculator.'
puts</pre>
The code was rough, but I actually created something useful (I still use it). I haven't created a program since this one, but it showed me the usefulness of programming. I put Learn to Program down and picked up XHTML and CSS fundamentals.

The beauty of this book was that the author uses it to teach an intro web design course at the university she works at.

As a result, the pacing, exercises and content were very easy to learn and, though a bit dated, taught me the difference between semantics and style.

The result of this book was all the front-end work I did for <a href="http://goldengatexpress.org">The Golden Gate Xpress</a>.

Using Learn to Program and <a href="http://railscasts.com/">RailsCast</a>, I wrote a scraper to print out the SF State Police crime log in the terminal:
    require 'rubygems'
    require 'nokogiri'
    require 'open-uri'

    url = "http://www.sfsu.edu/~upd/crimelog/index.html"
    doc = Nokogiri::HTML(open(url))
    puts doc.at_css("title").text
    doc.css(".brief").each do |brief|
     puts brief.css("h3:nth-child(3) , p:nth-child(4), h3:nth-child(4), p:nth-child(5)").text
    end
Eight months later I've added plenty of skills to my repertoire:
<ul>
	<li>LessCSS</li>
	<li>Git</li>
	<li>jQuery</li>
</ul>
Now, almost a year later, I put most of these skills together to build the new corporate website for Tagged, Inc. (<a href="http://about.tagged.com">about.tagged.com</a>)

That site took some time (and a design team to help), but I'm really proud of what I accomplished.

So, this is all to say that as long as you have the time, and the aptitude (which you should), you can definitely learn a thing or two about the web.

Here's to eight more months!
