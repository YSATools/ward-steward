ward-steward
============

Home Teaching App

Goals
---

  * use lds.org backend

  * view
    * my own self
    * my home / visit teaching companion
    * my home teachers
    * (women only) my visiting teachers
    * who I home / visit teach
    * all including contact info

  * create assignments
    * companionships (who doesn't have a companion)
    * assignments (who isn't assigned)

  * reporting (local / self and ward level)
    * how many people (for singles) or families (for homes) have been visited?
    * what was the method of visit? In home. Elsewhere. Video. Phone. Message.
    * who haven't been visited in a long time?
    * who haven't visited in a long time?
    * text reminders

  * create appointments
    * WhenIsGood-style?
    * text reminders?


Core Principles
---

This is being created with the belief that the most important
metrics of home teaching are whether or not **every member**
believes that they **have a friend** in the ward and whether or
not each member has **someone to turn to for a blessing** when
there **isn't a member of the priesthood** presiding over the **home**.

Although it may be difficult to compute such measures,
our goal is to make it easier to make visits and gather
(hopefully) useful data.

Development Tools
---

  * [rvm](http://rvm.io)
  * ruby 2
  * rails 4
  * [slim](http://slim-lang.com/)
  * git

Get it

    rvm use 2.0.0
    gem install rails

    git clone git@github.com:coolaj86/ward-steward.git
    pushd ward-steward
    bundle install

    rackup -p 3000

Build the browser

    pushd ward-steward
    pushd browser
    npm install
    grunt
    
See the vision

  <https://gomockingbird.com/mockingbird/#3gf6yam>
