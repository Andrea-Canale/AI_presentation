---
theme: seriph
background: /images/background.jpg
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## AI slides  
drawings:
  persist: false
defaults:
  foo: true
transition: slide-left
title: AI
mdc: true
---

# Artificial intelligence 

History and how GPT works

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: image-left
image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg/640px-Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg
---

# History of AI

The beginning

The first study about AI was in 1950 by Alan Turing where it proposed a test to measure the performance of an AI. 

This test is based on a game called "Game of Imitation", where there are 3 people(A, B and C), A is a man and B is a woman, C is asked to say who is the woman and who is the man through a series of questions. In the beginning C is a human and partecipate to the test then a machine is substituted to C and with the same questions, the machine, to called "intelligent" needs to make a score similar to human.

In 1952, Arthur Samuel developed a program that can play checkers against a human, it learn the human moves and calculate the best one next.

---
layout: two-cols
---

# History of AI 

The 60-70: the born of Machine Learning

In 1959, Arthur Samuel created the term "Machine Learning" and it refers when a machine can beat a human playing chess, learning from his moves.

Then, in 1966, Joseph Weizenbaum developed the first chatbot, called ELIZA that was a mock psychotherapist, it process natural language to converse with human and understand the prompt.

In 1979 at Stanford University, James L. Adams created the first autonomous vehicle that was able to navigate a room without chairs or other obstacals.

In the same year, the first association for AI was created.

::right::

<img src="https://upload.wikimedia.org/wikipedia/commons/7/79/ELIZA_conversation.png"  />

---
layout: default
---

# History of AI

The 80': AI boom

In the 80' different contries started to gives large funds for the AI research, particulary America due to the cold war. 

In the 1986 at the university of Munich, Ernst Dickmann created the first autonomous car that can drive on road without obstacals and human help.

<div class="grid grid-cols-2">
    <div>
        <img src="https://www.politico.eu/wp-content/uploads/2018/07/SelfDriveD_-78x67-714x467.jpeg" width="350"/>
        <p>External car</p>
    </div>
    <div>
        <img src="https://www.politico.eu/wp-content/uploads/2018/07/SelfDriveB_-78x70-714x486.jpeg" width="340"/>
        <p>The machine that can drive on road without human interaction</p>
    </div>
</div>
---
layout:default
---

# History of AI

1990-2011: Public available AI

In the previous slides, we spoke about AI in research, never for public usage. In the 1990, there was the beginning of public available AI.

In 1997, the IBM model, Deep blue beat the world chess champion and Microsoft release a first test of a speech recognition model.

In 2002, was released the first intelligent robot that can clean an house, the Roomba. It can create a map of the house and also recognize obstacals.

In 2006, with the boom of social network like Facebook or Twitter, they developed model that can understand our preference by what we view on social.

In 2011, Apple created Siri, the first model that can recognize speech, understand it and make action from the prompt.

---
layout: two-cols
---

# History of AI

The present

In our days, the AI research focus on image recognition and chatbot, especially on model that can create something from a given prompt.

In 2012, Google released the first model that can recognize cats given a photo.

In 2017, Facebook created the first AI chatbot but it was abandoned because it started to create it own language. 

In 2020, OpenAI created GPT model that can understand language and produce an output.

From 2022 to today, we have see creation on new models every month that can do the most disparate tasks.

::right::

<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/561/219/datas/original.png" />
<p>A model(YoloV8) that can recognize car and estimate the speed</p>

---
layout: two-cols
---

# How GPT works? 

The magic behind LLM chatbot

A Large Language Model like GPT can predict, not understand, the given prompt and give a probabilistic output.

LLM needs to be trained on raw information, like journal pages or web page and it "learn" it to give an output from a given prompt.

An LLM divide the prompt in token(portion of phrase), giving it a number then search in the information that learned a similar number(so a similar token) and give it as output. It use the first output token to predict the next one.

::right::

<img src="/images/tokenizer.png" />
<p>In this case, we can how GPT3.5-4 tokenize a prompt, in this case it can understand that I asked(red token) something about Rome(orange token) and particulary where is it(violet token)</p>

---

# Concatenated models 

How models like DALL-E works?

Models like DALL-E use LLM in cascade, it first use GPT to understand the prompt, then it pass token to another LLM that create an image taking portion of image based on token. Like GPT it needs training to with different images to associate token to an image.


<div class="grid grid-cols-2">
    <img src="/images/dall_e_tokenizer.png" width="384" />
    <p>In this case it understand that I want a dog(green token) in the sky(blue token) then it takes photo of a dog and of sky and put it together</p>
</div>

---

# It this real intelligent?

We can consider this statistic approch really intelligent?

The researcher call it artificial intelligence refering to the Turing's definition but they specify that current model can't really understand the prompt but try to predict the most probably one.

This approch works well in most of the case but a modern model still can't create an own indipendent output, it will always "copy" the information that it learned previously with a small elaboration.
