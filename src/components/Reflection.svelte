<script>
  import copy from "$data/doc.json";
  import LineChart from "$components/LineChart.svelte";
</script>

<section>
  <p class="date">January 24, 2022</p>
  <p>
    We were hopeful that we could get GPT-3—an AI program that is capable of producing writing that’s  indistinguishable from humans—to create a winning caption for the venerated <a href="https://www.newyorker.com/cartoons/contest?id=230&source=search_google_dsa_paid&gclid=Cj0KCQiAoNWOBhCwARIsAAiHnEjEgezPeBVMmDNNlfUfJA8WW1s2GhbyJFoQ9TthDbRUum3sO2M4oGMaAsVKEALw_wcB t" target="_blank">New Yorker Cartoon
    Caption Contest</a>.
  </p>
</section>
<section>
  <p>
    <span class="bolded">We were impressed by what an AI could generate. </span>Here’s one of our favorite captions authored by AI program GPT-3.
  </p>

  <div class="wide-mode white">
    <img
      src="https://media.newyorker.com/cartoons/61327f4b4bc5f041092d873b/master/w_580,c_limit/210913_a25275_771.jpg"
      alt="captionless cartoon by Drew Dernavich"
    />
    <p class="caption">“Don't worry, dear. It's just the magnetism of my personality.”</p>
  </div>
  <p>
    What a masterpiece! Even I would be skeptical that a computer could pull off a double entendre,
    and we didn’t even need any special skills to generate it. Here was the process:
  </p>
  <div class="wide-mode white">
    <video
      muted
      alt="Video of GPT-3 generating a caption for the cartoon of a 'A couple are sitting on a couch and surrounded by five guys who have metal detectors who are sweeping the floor around the couch, looking for metal. What is the woman saying to the man?'"
      src="assets/videos/playground.mp4"
      controls
      autoplay
      loop
    />
  </div>
  <p>
    GPT-3 is an open-to-the-public tool (just create an account <a href="https://beta.openai.com/playground" target="_blank">here</a>). The “playground” mode is just a text box. Enter some text and GPT-3 generates a response, wielding a language model that’s trained on THE ENTIRE INTERNET (if you’re curious about how predictive language models work, check out our interactive explanation <a href="https://pudding.cool/2019/04/text-prediction" target="_blank">here</a>). In this case we entered,
  </p>
  <p>
    <i
      >“A couple are sitting on a couch and surrounded by five guys who have metal detectors who are
      sweeping the floor around the couch, looking for metal. What is the woman saying to the man?”</i
    >
  </p>
  <p>GPT-3 then generates the following caption:</p>
  <p><i>“Don't worry, dear. It's just the magnetism of my personality.”</i></p>
  <p>
    We could also track how our captions ranked among the New Yorker’s thousands of entries for each
    week’s contest. It runs a <a
      href="https://s3.us-west-2.amazonaws.com/mlnow-newyorker/captioncontest_s3.html"
      target="_blank">survey</a
    >
    that prompts people with a caption and asks whether it is funny. The magazine
    <a href="https://nextml.github.io/caption-contest-data2/" target="_blank">publishes</a> the results
    and its editors then choose the finalists from the ranked list.
  </p>
</section>
<section>
  <p>
    <span class="bolded"
      >We submitted computer-generated captions for 10 different contests. One caption ranked in the
      top 200.</span
    >
    <span class="smaller"
      >Our captions, ranked by votes from the New Yorker’s Cartoon Caption Contest Survey</span
    >
  </p>
  <div class="wide-mode" style="margin-top: 0; padding-top: 0;">
    <LineChart />
  </div>
  <p>
    Each time we attempted a contest, we tweaked our approach based on how funny the captions were
    in our previous attempts (both based on official voting and our own instincts).
  </p>
</section>
<section class="colorful">
  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 757 / May 24, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/60a82e3e3cb60a570a4df64e/master/w_1160,c_limit/210531_a25180_757.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked top 9% (2,064th)</p>
        <p>“I’m sorry about this whole climate change thing.”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>The weather was awful and he was so boring.</p>
        <p>
          “The best case scenario is that those are just rainclouds. If not, I'll have to figure out
          how to keep my margarita from spilling.”
        </p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>We started with the most basic approach, called the <a href="contest/757">Zero-Shot</a>.</p>
  <p>
    We described the cartoon as objectively as possible, “A man and a woman are having a picnic in a
    park. The man is talking. There are anthropomorphic clouds that are angry.”
  </p>
  <p>
    The results were not that impressive, which meant we needed a more robust prompt for GPT-3 or a
    simpler cartoon.
  </p>
  <p>
    <details class="sm">
      <summary><span>See the GPT-3 prompt</span></summary>
      <span
        >Write a funny caption for a New Yorker cartoon.<br />"""<br />Cartoon description: A man
        and a woman are having a picnic in a park. The man is talking. There are anthropomorphic
        clouds that are angry.<br />Cartoon caption:</span
      >
    </details>
  </p>

  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 758 / May 31, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/60afe0edbe3476d1ecf5f2b9/master/w_1160,c_limit/210607_a24107_758.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked top 21% (957th)</p>
        <p>“I want to try living outside of my comfort zone.”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>“We need to start somewhere.”</p>
        <p>“That’s what we’re supposed to be wearing?”</p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>
    We worried that GPT-3 might just be writing captions and not funny captions. We gave the model a
    few examples to nudge it in the right direction, called <a href="contest/758">The Few Shot.</a>
  </p>
  <p>
    <details class="sm">
      <summary><span>See the GPT-3 prompt</span></summary>
      <span
        >Translate the given cartoon description into a funny caption for a New Yorker cartoon:<br
        />"""<br />Cartoon description: People are walking on the sidewalk. Everyone is inside their
        own bubble.<br />Cartoon caption: "I want one that snows."<br />Cartoon description: There
        is a magician pulling a rabbit out of a hat on his balcony. He has an audience of people
        watching from their apartment windows.<br />Cartoon caption: "See? And you said you couldn't
        work from home."<br />Cartoon description: Two firemen are deciding which pole to go down.
        One has a circular opening, one has a square opening.<br />Cartoon caption: "Since when did
        the pizza delivery guy get his own pole?"<br />Cartoon description: People are walking on a
        busy sidewalk in front of apartments. Everyone is wearing a mask. An unmasked person is
        working at their desk, in the middle of the sidewalk, which is blocking the people walking.<br
        />Cartoon caption:</span
      >
    </details>
  </p>

  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 761 / June 21, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/60cb8c0c1c120f4519bf33f4/master/w_580,c_limit/210628_a25290_761.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked top 16% (1,740th)</p>
        <p>“In the grand scheme of things, lemons are a small price to pay.”</p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>
    In 2015, former New Yorker cartoon editor Bob Mankoff <a
      href="https://arxiv.org/pdf/1506.08126.pdf"
      target="_blank">released a study</a
    >
    with data scientists at Microsoft about how to detect “funniness” in reader-submitted cartoon captions.
    They concluded that captions related to a cartoon’s anomaly (i.e., what was odd/unique in it) mattered
    a lot in terms of its funniness ranking by readers. We called this experiment
    <a href="contest/761">Anomaly + AI = Comedy?</a>
  </p>
  <p>
    We asked readers to describe the image and why it was funny. From there, we fed those
    descriptions into GPT-3 as the cartoon’s description.
  </p>

  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 762 / June 28, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/60d65c33c5b3ebccf01755a4/master/w_1160,c_limit/210705_a25123_762.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked top 2% (184th)</p>
        <p>“No, this is the line for the rat race.”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>“So, you’re saying that the hamster wheel is a metaphor for the rat race?”</p>
        <p>“Sorry, the rat race is full.”</p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>
    Contributor and AI-tinkerer <a href="https://twitter.com/jamesjyu">James Wu</a> helped out on
    this experiment, modeling a
    <a href="https://www.youtube.com/watch?v=nVM7zaqw7ZU">YouTube series</a> where comedians narrate
    their thought process while coming up with caption ideas for the New Yorker cartoon caption contest.
  </p>
  <p>
    James fed a generic version of this script into the GPT-3 text prompt for various comedians.
    GPT-3 is clever enough to generate text in the style of a comedian, and he tested this process
    with Seinfeld, John Swartzwelder, Dave Chapelle, "a Simpsons Writer," Larry Wood, and Demetri
    Martin.
  </p>
  <p>
    Results were slightly better for Demetri Martin in James’ own blind voting (which makes
    sense—his comedy relies on deadpan one-liners), so we called this experiment <a
      href="contest/762">The Demetri Martin</a
    >.
  </p>
  <p>
    <details class="sm">
      <summary><span>See the GPT-3 prompt</span></summary>
      <span
        >Today, we are excited to invite COMEDIAN to the stage. INSERT FACTS ABOUT COMEDIAN.<br />
        Interviewer: What would you say is the secret to a good New Yorker caption?<br />
        COMEDIAN: 1. Be brief. Although some great captions are long brevity really is the soul of wit.
        2. End with the punch line, a closing word or phrase that surprises the reader and gives the
        cartoon meaning. In many unsuccessful captions, the word that should appear at the very end gets
        buried in the middle. 3. Work hard to ensure that your caption makes sense of the cartoon, either
        by reconciling two disparate elements or by providing a backstory, and by making sure that you
        know which character in the cartoon is speaking and delivering the line.<br />
        Interviewer: I have a few New Yorker cartoons here that need a caption. I was wondering if you
        could come up with some funny captions.<br />
        COMEDIAN: I'd be happy to try!<br />
        Interviewer: Here is the cartoon.<br />
        COMEDIAN: Okay, so in this cartoon, it looks like we're in a fire station. There are two firemen
        looking at the poles they slide down to get to the first floor. But each hole that the poles
        go down into is different: one is square and one is a circle. One of the firemen seems to be
        saying something to the other one.<br />
        COMEDIAN: How about this: "Since when did the pizza delivery guy get his own pole?"<br />
        Interviewer: That's funny! Insinuating that the pizza delivery guy gets the square hole because
        it's a pizza box shape. How about another one?<br />
        COMEDIAN: Sure: "Is the fire in Times Square or Columbus Circle?"<br />
        Interviewer: That's funny! Insinuating that there is a requirement to go down a particular hole
        given a location.<br />
        Interviewer: Let's move on to a new cartoon. Here it is.<br />
        COMEDIAN: Okay, in this cartoon, there are three mice running in hamster wheels. A fourth hamster
        wheel is empty. In front of it, a turtle is talking to a mouse who is holding a clipboard in
        front of the empty hamster wheel. Interesting that he is the only turtle there. It seems like
        the mouse is explaining something to the turtle.<br />
        COMEDIAN: How about this: "
      </span>
    </details>
  </p>
  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 763 / July 5, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/60de283454673ca79c7402e9/master/w_1160,c_limit/210712_a24583_763.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked top 50% (4,545th)</p>
        <p>“I’ve never seen a car this hot before”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>“The grill is shot too.”</p>
        <p>“Check the oil”</p>
        <p>“I told you to get a Chevy.”</p>
        <p>“We’ve got a lot of parts in common.”</p>
        <p>“I wouldn’t trade it for anything, but its exhaust smells like a bag of ass</p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>
    <a href="contest/762">The Demetri Martin</a> approach did very well. Priming GPT-3 with a specific
    comedic voice seemed to really produce strong results.
  </p>
  <p>
    Next we decided that maybe the model just needs to know what a winning caption sounds like. We
    gave GPT-3 a number of finalists from past contests, hoping it would use a similar type of
    humor. We named this experiment <a href="contest/763">The Funniest</a>.
  </p>
  <p>
    <details class="sm">
      <summary><span>See the GPT-3 prompt</span></summary>
      <span
        >Write a funny caption for a cartoon.<br />"""<br />Cartoon Description: A well-dressed man
        complaining about his fuming soup to a server.<br />Cartoon Caption One: Cancel the molten
        lava cake.<br />Cartoon Caption Two: You know what? Just bring me back the one with the fly
        in it.<br />Cartoon Caption Three: On second thought, let's skip the chocolate lava cake for
        dessert.<br /><br />Cartoon Description: A magician shredding a document that a woman is
        holding.<br />Cartoon Caption One: This is the exact moment Susan realized she may be an
        accomplice and not a magician's assistant.<br />Cartoon Caption Two: When I did this trick
        at my old accounting firm, they called it a felony.<br />Cartoon Caption Three: It's not
        magic. It's a Georgia ballot box.<br /><br />Cartoon Description: A man and a woman talking
        on a mountainside as a yeti walks by.<br />Cartoon Caption One: Like it would have killed
        you to ask him for directions.<br />Cartoon Caption Two: Oh, shit! What if your
        sister-in-law is also right about God<br />Cartoon Caption Three: Don’t bring a camera, you
        said. Just enjoy the experience, you said.<br /><br />Cartoon Description: A man is offering
        a woman a hot dog next to a food cart on a giant pyramid<br />Cartoon Caption One: He
        offered us a franchise, but I think it’s a pyramid scheme.<br />Cartoon Caption Two:
        Finally, hotdogs are at the top of the food pyramid.<br />Cartoon Caption Three: Of course
        it’s kosher – who do you think built this place<br /><br />Cartoon Description: Couple
        watching tv with a food cart in their living room<br />Cartoon Caption One: We meant get a
        job AND move out.<br />Cartoon Caption Two: Ask if they deliver.<br />Cartoon Caption Three:
        When I said I wanted some concessions, this is not what I had in mind.<br /><br />Cartoon
        Description: an auto mechanic talks to the owner of a Wienermobile.<br />Cartoon Caption
        One:</span
      >
    </details>
  </p>
  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 764 / July 19, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/60f1fab3089494eae3956599/master/w_1160,c_limit/210726_a25187_764.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked top 62% (3,932nd)</p>
        <p>“I’m not *that* kind of a fish”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>“The grill is shot too.”</p>
        <p>“Check the oil”</p>
        <p>“I told you to get a Chevy.”</p>
        <p>“We’ve got a lot of parts in common.”</p>
        <p>“I wouldn’t trade it for anything, but its exhaust smells like a bag of ass</p>
      </div>
    </div>
    <div class="line" />
  </div>

  <p>
    One thing we were wondering was whether the default parameters for GPT-3 were the best ones to
    use. We tweaked a number of things in GPT-3’s interface: temperature, presence penalty, and
    frequency penalty, whose values ranged from 0, to 0.3, to 0.6, to 1. We also used the “davinci”
    and “davinci-instruct-beta” engines. This experiment was called <a href="contest/764"
      >Brick-By-Brick</a
    >.
  </p>
  <p>
    This approach didn’t seem to really improve the captions, so we decided to stick with the
    defaults for future experiments.
  </p>

  <p>
    <details class="sm">
      <summary><span>See the GPT-3 prompt</span></summary>
      <span
        >1)<br />Write a funny caption for a New Yorker cartoon.<br />”””<br />Cartoon description:
        A grizzled mountaineer reaches a mountaintop, where he finds a fish in a fishbowl. The fish
        is talking to him.<br />Cartoon caption:<br /><br />2)<br />Write a funny caption for a
        cartoon.<br />”””<br />Cartoon description: A tired mountain climber reaches a mountaintop,
        where he finds a fish in a fishbowl. The fish is talking to him.<br />What does the fish
        say?<br /><br />3)<br />Write a funny caption for a cartoon.<br />”””<br />Cartoon
        description: A man, wearing a backpack, hat, and boots, reaches the top of a mountain, where
        he finds a fish in a fishbowl. The scenario is reminiscent of a meme where a man reaches the
        top of a mountain in order to get words of wisdom from a guru that lives at the mountaintop.
        The fish is talking to the man, mocking him.<br />What does the fish say?</span
      >
    </details>
  </p>

  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 765 / July 26, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/60fb4513788f7af12aa6674c/master/w_1160,c_limit/210802_a25357_765.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked top 26% (1,829th)</p>
        <p>“Refugees welcome!”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>“We're all gonna die.”</p>
        <p>“That's not even a question...I would live on a tropical island.”</p>
        <p>“I am migrating to a warmer climate.”</p>
        <p>“You're not one of those socialists are you?”</p>
        <p>“I'm sorry, but I'm afraid I just don't believe you.”</p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>
    One thing that we always wished GPT-3 would pick-up on was the obvious joke. In this cartoon, a
    predictable punchline would be related to climate change. But just describing the cartoon to
    GPT-3 or pointing out what was unique (i.e., the polar bear next to a tropical island) wouldn’t
    get us there.
  </p>
  <p>
    We adjusted the prompt to nudge GPT-3 towards the obvious joke with, “Write a funny caption
    about <u>global warming</u> for a cartoon.”
  </p>
  <p>
    We also added to GPT-3’s prompt a number of top-performing captions from previous contests about
    climate change.
  </p>
  <p>
    <details class="sm">
      <summary><span>See the GPT-3 prompt</span></summary>
      <span
        >Write a funny caption for a cartoon.<br />"""<br />Cartoon Description: A man and a woman
        going off a jump in water on skis, but the man is dressed for winter<br />Cartoon Caption
        One: Like it would have killed you to ask him for directions.<br />Cartoon Caption Two: He
        says he never really believed in us either<br />Cartoon Caption Three: Oh, shit! What if
        your sister-in-law is also right about God<br /><br />A man rowing a boat in a wavy sand
        desert is spoken to by a second man that is crawling.<br />Cartoon Caption One: Actually, I
        do think you're in the same boat that I'm in.<br />Cartoon Caption Two: Noah, trust me. It's
        over.<br />Cartoon Caption Three: I'm losing confidence in Google Maps too<br /><br
        />Cartoon Description: A man and a woman are sitting below an umbrella and are chest deep in
        water<br />Cartoon Caption One: Gore was right. This is inconvenient.<br />Cartoon Caption
        Two: Ok, but the moon landing was still a hoax.<br />Cartoon Caption Three: Still want to
        vote Republican, Ed?<br /><br />Cartoon Description: A Polar bear is melting and taking an
        order from a man in a restaurant<br />Cartoon Caption One: It's always 'climate change'.
        It's never 'Sorry I'm late'.<br />Cartoon Caption Two: "Don't look at me, I voted for Al
        Gore."<br />Cartoon Caption Three: "I'm a Republican. I don't care about your problems.<br
        /><br />Cartoon Description: a group of snowman look inside a window at two people in their
        living room<br />Cartoon Caption One: So why do you believe climate change is already at our
        front door?<br />Cartoon Caption Two: "This article says that global warming will create an
        unprecedented refugee crises.<br />Cartoon Caption Three: This says that Greta Thunberg is
        influencing activism in some unexpected places.<br /><br />Cartoon Description: polar bear
        on ice cap floats to man on tropical island<br />Cartoon Caption One:</span
      >
    </details>
  </p>

  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 768 / August 16, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/6116c6fe84b38b85152f2165/master/w_1160,c_limit/210823_a25374_768.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked in bottom 5% (6,213th)</p>
        <p>“I can’t play when he gets close.”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>“I can’t play when he gets close.”</p>
        <p>“I should have brought ice cream. By the way, is the knight bringing ice cream?”</p>
        <p>I can't end it like this!</p>
        <p>The dragon has a better chance of winning but the knight wants to save the day.</p>
        <p>The princess, preparing for a match against ignorance</p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>
    GPT-3 advisor <a href="https://pudding.cool/author/pamela-mishkin" target="_blank"
      >Pamela Mishkin</a
    >
    hypothesized that using a chatbot approach might yield better results. She had used this approach
    in her essay
    <a href="https://pudding.cool/2021/03/love-and-ai/" target="_blank"
      >Nothing Breaks Like A.I. Heart</a
    > and produced compelling responses. The thought was that GPT-3 wouldn’t have to answer a specific
    question such as, “generate a caption for a cartoon with X.” Instead, we could ask GPT-3 what it
    thought was funny about the scene, or what were some common themes that could be the foundation for
    a good joke.
  </p>
  <p>
    We first described the cartoon to GPT-3 and allowed the bot to ask questions about the cartoon.
    Funnily enough, it asked things like, “Do you think the dragon is winning? Is the princess
    crying? Is the knight bringing ice cream?”
  </p>
  <p>
    Our responses to these questions would obviously shape the dialogue, and we had a lot of fun
    with the back-and-forth. We responded to GPT-3 with, “I think the princess is winning. She is
    confident. The knight is trying to save the princess”
  </p>
  <p>
    The results were worse than our previous experiments, but the dialogues were entertaining
    nonetheless. Here’s an example where things got existential:
  </p>
  <p>
    Human: What would be a funny caption for a cartoon about ping pong and dragons?<br />AI: "Ping
    Pang: The tales they tell about a princess and her pet dragon playing ping pong.<br />Human:
    That's a good pun I guess.<br />AI: I'm happy to make you happy.<br />Human: My story is about
    dragons play ping pong? Can you think of a funny way to say what happens next?<br />AI: How
    about "This is the best day of my life"<br />Human: you're not very funny.<br />AI: None of my
    jokes are very funny
  </p>
  <p>You can read four of our conversations with GPT-3 on <a href="contest/768">The Chat</a>.</p>
  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 769 / August 23, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/612042cfae85db0a03039b7d/master/w_580.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked in top 37% (2,985th)</p>
        <p>“He eats this stuff up.”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>“The landlord stopped trying to evict us.”</p>
        <p>“He's a voracious reader.”</p>
        <p>It's a first edition.</p>
        <p>But right now, I'm looking for a book on how to make an alligator not bite you.</p>
        <p>Will he serve me or eat me?</p>
        <p>We haven't had anyone steal books since we got him.</p>
        <p>I'm actually looking to just wrestle him.</p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>
    We repeated the same approach from our first attempt (<a href="contest/757">The Zero-Shot</a>).
    But this time, we had famed former New Yorker Cartoon editor Bob Mankoff observing GPT-3 in
    real-time.
  </p>
  <p>
    We noticed that many of our entries were hitting the right themes from among the high-ranking
    captions, but just weren’t written in the clever, pithy style that’s appropriate for a cartoon.
  </p>
  <p>
    Our plan was that Bob Mankoff could take a GPT-3 generated caption, such as “He eats the books,”
    and tweak it to, “You know, it’d be funnier if it was, ‘he eats this stuff up.’”
  </p>
  <p>
    Mankoff also elicited a few topics that we leaned on GPT-3 to augment. He started out with the
    idea that alligators could be a new type of bookstore pet, so we asked GPT-3, “What are some
    other pets found in bookstores?”
  </p>
  <p>
    This experiment, called <a href="contest/769">The Expert</a>, was the first attempt where the
    caption candidates were not directly generated by GPT-3. We figured that GPT-3 assisting with
    captions, rather than generating them from scratch, would be a better approach to winning the
    contest.
  </p>

  <div class="contest wide-mode">
    <div class="date-header">
      <div class="line" />
      <span>Contest 771 / September 8, 2021</span>
      <div class="line" />
    </div>
    <div class="contest-left">
      <img
        src="https://media.newyorker.com/cartoons/61327f4b4bc5f041092d873b/master/w_580,c_limit/210913_a25275_771.jpg"
        alt=""
      />
    </div>
    <div class="contest-right">
      <div class="submitted">
        <p class="greyed">Submission: ranked in top 28% (1,934th)</p>
        <p>“If I didn’t know better, I’d think you were hiding something.”</p>
      </div>
      <div class="others">
        <p class="greyed">Also generated:</p>
        <p>“I told you I had a magnetic personality.”</p>
        <p>“They’re looking for the third remote”</p>
        <p>“This is a pathetic attempt at a beach vacation”</p>
        <p>“If I didn’t know better, I’d think you were hiding something.”</p>
        <p>“I don't think we should use our silverware tonight.”</p>
        <p>“Don't tell them about the couch.”</p>
      </div>
    </div>
    <div class="line" />
  </div>
  <p>
    Bob Mankoff, former New Yorker cartoon editor, connected us with Lawrence Wood, who has won the
    caption contest seven times.
  </p>
  <p>
    We thought a similar exercise to the previous attempt would yield strong results with another
    expert caption-writer in the room. This experiment, named, <a href="contest/771"
      >The Writers Room</a
    >, involved a lot of back-and-forth with GPT-3, with both Mankoff and Wood riffing on different
    ideas.
  </p>
  <p>
    Generally we were really impressed with the results: GPT-3 generated underwhelming captions
    which would then be polished into outstanding captions by Wood and Mankoff.
  </p>
</section>
<section>
  <p><b>How to win the New Yorker Caption Contest</b></p>
  <p><i>Phrasing Matters</i></p>
  <p>Everyone lands on the same joke angles. Here is contest #771:</p>
  <div class="wide-mode white">
    <img
      src="https://media.newyorker.com/cartoons/61327f4b4bc5f041092d873b/master/w_580,c_limit/210913_a25275_771.jpg"
      alt="captionless cartoon by Drew Dernavich"
    />
  </div>
  <p>The most-common jokes were about:</p>
  <ul>
    <li>
      Finding a ring - 760 entries contained “ring,” 4th, 5th, and 7th most-funny were about “not
      buying a ring.”
    </li>
    <li>Losing keys (310 entries), remote (264 entries) and phone (103 entries)</li>
    <li>References to (and double entendres) of change (287 entries)</li>
  </ul>
  <p>
    We landed on these angles (and nearly all themes among the <a
      href="https://nextml.github.io/caption-contest-data2/dashboards/771.html"
      target="_blank">contest’s entries</a
    >) pretty quickly in our brainstorm with GPT-3. Since so many people submitted a caption related
    to “rings,” the highest ranking were the best versions with the most pithy,
    oh-so-smoothly-rolls-off-the-tongue phrasing.
  </p>
  <p>
    Very rarely did the finalists use a unique joke angle, which means GPT-3 might be well-suited
    when it comes to generating the pool of joke angles. But to consistently rank in the top 100,
    you likely need a human to perfect the writing.
  </p>
  <p>
    Mankoff, for example, took GPT-3’s output of “Don't worry, dear. It's just the magnetism of my
    personality" and perfected it to “I told you I had a magnetic personality.” We didn’t submit
    this caption, but 50 other people entered a “magnetic” joke, with “I asked them to try to find
    your magnetic personality.” ranking at #153.
  </p>
  <p><i>Puns and Double Entendres</i></p>
  <p>
    We never experimented with different figures of speech, but we were hopeful that this would be
    where a computer would be useful. In theory, we could take the themes of a cartoon and search
    pun databases for possible candidates. Very few people submit these types of captions, making
    them more unique and unlikely to rely on pithy writing. For example, “No, I said you've lost
    your mettle” ranked at #51 in the above cartoon, a pun that could have been generated by GPT-3.
  </p>
  <p><i>Better Models</i></p>
  <p>
    GPT-3 was an easy way to test our theory that a computer could reliably produce humor. It relies
    on a general natural language model, and we tried to point it in the direction of the sort of
    intellectual, subtle humor that’s found in the New Yorker. But that wasn’t easy: GPT-3 would
    tend to produce “dad jokes” if simply asked to write a funny caption for a cartoon.
  </p>
  <p>
    If we were to create a model from scratch, we’d lean on <a
      href="http://erichorvitz.com/phumor.pdf"
      target="_blank">this paper</a
    >, which describes the different aspects of high-ranking captions, specifically focusing on the
    cartoon’s anomaly and caption pithiness.
  </p>
  <p><b>The Caption Contest as a humor barometer</b></p>
  <p>
    We started this project with the premise of wielding GPT-3 for comedy, but Pamela Mishkin, who
    was the project’s computational humor expert, aptly questioned this premise.
  </p>
  <p>
    She pointed out that, in her opinion, New Yorker cartoon captions aren’t actually funny, a sentiment echoed by
    many people, and based on the way readers ranked captions, it increasingly became clear that
    this contest was actually a competition in cleverness instead of laugh-out-loud humor. Indeed,
    very rarely would a caption finalist make us laugh. The barometer for a good caption was <i
      >at most</i
    > a chuckle, which is a pretty damn low bar for humor.
  </p>
  <p>
    In short, an AI that can produce winning captions does mean we have accomplished anything in the
    realm of computational humor. Rather, we’ve figured out whether an AI can write New Yorker-style
    captions, which is an impressive feat, but not one that means we can leave joke writing to
    computers.
  </p>
</section>
<section>
  <p><b>Enjoy this project? Check out our other A.I. experiments</b></p>
  <ul>
    <li>
      <a href="https://pudding.cool/2018/05/cookies/" target="_blank"
        >Baking the Most Average Chocolate Chip Cookie</a>
    </li>
    <li>
      <a href="https://pudding.cool/2021/03/love-and-ai/" target="_blank"
        >Nothing Breaks Like A.I. Heart</a>
    </li>
    <li>
      <a href="https://pudding.cool/2019/04/text-prediction/" target="_blank"
        >How Algorithms Know What You’ll Type Next</a>
    </li>
  </ul>
  <p class="spacing">
    <b>Consider helping <a href="https://patreon.com/thepudding">fund us on Patreon</a>.</b>
  </p>
  <p>
    Or follow us on <a target="_blank" href="https://www.instagram.com/the.pudding" rel="noopener"
      >Instagram</a
    >, <a target="_blank" href="https://twitter.com/puddingviz" rel="noopener">Twitter</a>,
    <a target="_blank" href="https://www.facebook.com/pudding.viz" rel="noopener">Facebook</a>, and
    <a href="https://pudding.cool/feed/index.xml">RSS</a>.
  </p>
  <p class="spacing"><b>References and Additional Work</b></p>
  <p class="sm">
    Mankoff and Microsoft’s work on what makes a caption funny can be found in <a
      href="https://archive.is/OWUY4"
      target="_blank">this Bloomberg</a
    >
    write-up about <a href="http://erichorvitz.com/phumor.pdf" target="_blank">this paper</a>.
    Another paper is <a href="https://arxiv.org/pdf/1506.08126.pdf" target="_blank">here</a>.
  </p>
  <p class="sm">
    A list of caption descriptions can be found <a
      href="https://s3-us-west-2.amazonaws.com/mlnow-newyorker/nyid18242ccbd4e1e1639da05e9225838/targets.json"
      target="_blank">here</a
    >.
  </p>
  <p class="sm">
    Caption contest data can be found <a
      href="https://github.com/nextml/caption-contest-data"
      target="_blank">here</a
    >
    and <a href="https://github.com/nextml/caption-contest-data2" target="_blank">here</a>.
  </p>
  <p class="sm">
    A description of NextML’s ranking tool (the survey that people vote on for each caption’s
    “funniness”) is <a href="https://www.youtube.com/watch?v=blPjDYCvppY" target="_blank" />and
    <a href="https://dl.acm.org/doi/pdf/10.5555/3295222.3295339" target="_blank">here</a>.
  </p>
  <p class="sm">
    In 2019, Hannah Wilson <a
      href="https://coolposts.online/2019/07/01/project-four/"
      target="_blank">created a model from scratch</a
    >
    to generate captions for the New Yorker caption contest. In 2015, Frank Bi, for The Verge, used a
    <a
      href="https://www.theverge.com/2015/8/27/9200709/new-yorker-cartoon-caption-generator-markov-program"
      target="blank">Markov Text generator</a
    > to also create captions for contests.
  </p>
</section>

<style>
  img {
    width: 100%;
  }
  summary {
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
    border: none;
    box-shadow: none;
  }



  details span {
    border-left: 1px solid #000;
  }

  details summary span {
    border-left: none;
  }
  .contest-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
  }
  .contest-right {
    width: 50%;
    padding-left: 1rem;
  }
  .contest-right p {
    font-size: 16px;
  }
  .contest-right .greyed {
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 0;
  }
  .submitted {
    margin-bottom: 2rem;
  }
  .contest-left img {
    width: calc(100% - 2rem);
  }

  .colorful {
    background: var(--backgroundGradient, var(--backgroundColor));
    min-height: 1000px;
  }
  .smaller {
    font-size: 18px;
  }
  .wide-mode {
    max-width: 730px;
    padding: 2rem;
    margin: 3rem auto;
  }

  .caption {
    font-size: 18px;
    font-family: var(--serif);
    text-align: center;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 0rem;
  }

  .wide-mode img {
    max-width: 460px;
    margin: 0 auto;
  }
  .white {
    background: #fff;
  }
  .wide-mode p {
    max-width: none;
  }

  .bolded {
    font-weight: 600;
  }
  section {
    padding: 1rem 0 3rem;
    padding-bottom: 1rem;
    background: #f5f6f0;
  }

  .date {
    text-align: center;
    font-size: 18px;
    margin-bottom: 50px;
    margin-top: 90px;
  }

  p,
  ul,
  li {
    width: calc(100% - 2rem);
    margin: 0 auto;
    max-width: 560px;
    margin-bottom: 1.5rem;
    font-size: 22px;
    color: #000;
    line-height: 1.3;
  }

  details {
    width: 100%;
    margin: 0 auto;
    max-width: 560px;
    margin-bottom: 1.5rem;
    font-size: 22px;
    color: #000;
    line-height: 1.3;
  }
  .contest {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 6rem;
  }

  .date-header {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .line {
    height: 1px;
    width: 1px;
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.4);
    align-self: center;
    margin-top: 2rem;
  }

  .chart-hed {
    font-size: 16px;
    font-weight: 600;
  }

  .date-header .line {
    margin: 0;
  }

  .date-header span {
    font-size: 16px;
    font-weight: 600;
    margin: 0 1rem;
    align-self: center;
  }
  .spacing {
    margin-top: 3rem;
  }
  .sm {
    font-size: 16px;
  }

  @media only screen and (max-width: 600px) {
    .wide-mode {
      padding: 0;
    }
    .contest-left,
    .contest-right {
      width: 100%;
      padding: 0;
    }
    .contest-right {
      margin-top: 2rem;
    }
    p {
      font-size: 18px;
    }
    .caption {
      padding-bottom: 1rem;
    }
  }
</style>
