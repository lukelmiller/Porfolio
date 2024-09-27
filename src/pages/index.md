<style>
    
    .drop-in-animation{
        animation: drop-in forwards 4s 1;
        animation-delay: 3s;
        border-radius: 50%;
        opacity: 0%;
        transform: translateY(-2rem);
    }
    .hand {
        animation: wave forwards 0.9s 3;
        animation-timing-function: linear;
        &:hover{
              animation: wave forwards 0.9s infinite;
        }
    }

    .hero{
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        justify-content: center;
    }

    .hero-text{
        flex-basis: 50%;
    }

    .profile-img { 
        border: 8px solid rgba(100%, 100%, 100%, 50%);
        border-radius: var(--border-radius);
        height: 196px;
        transform: translateY(0);
        width: 196px;
 
    }

    .profile-img-glow{
        border-radius: var(--border-radius);
        height: 100%;
        width: 100%;
        position: absolute;
              overflow: hidden;
            filter: blur(16px);
        &:before{
    animation: rotate 8s linear infinite;
    position: absolute;
     content: '';
   width: 150% ;
        height:  150%;
        left: -25%;
        top: -25%;
        background-repeat: no-repeat;
    background: radial-gradient(18% 28% at 24% 50%,#cefAFFFF 7%,#073AFF00 100%),radial-gradient(18% 28% at 18% 71%,#fffFFF59 6%,#073AFF00 100%),radial-gradient(70% 53% at 36% 76%,#73f2FFFF 0,#073AFF00 100%),radial-gradient(42% 53% at 15% 94%,#fffFFFFF 7%,#073AFF00 100%),radial-gradient(42% 53% at 34% 72%,#fffFFFFF 7%,#073AFF00 100%),radial-gradient(18% 28% at 35% 87%,#fffFFFFF 7%,#073AFF00 100%),radial-gradient(31% 43% at 7% 98%,#fffFFFFF 24%,#073AFF00 100%),radial-gradient(21% 37% at 72% 23%,#d3fF6D9C 24%,#073AFF00 100%),radial-gradient(35% 56% at 91% 74%,#8a4FFFF5 9%,#073AFF00 100%),radial-gradient(74% 86% at 67% 38%,#6dfFAEF5 24%,#073AFF00 100%),linear-gradient(125deg,#4eb5FFFF 1%,#4c00FCFF 100%);
     
        }
    }

    .stack{
        height:  fit-content;
        position: relative;
        width: fit-content ;
    }


    @keyframes drop-in{
        0%{
            opacity: 0%;
            transform: translateY(-2rem);
            border-radius: 50%;

        }
        25%{
            border-radius: 50%;
            opacity: 100%;
        }
        100%{
            transform: translateY(0);
            border-radius: var(--border-radius);
                 opacity: 100%;
        }
    }

    @keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}
    
    @keyframes wave {
        60% {
            transform: translateX(15px) rotate(16deg);
        }
    }
</style>

<div class="hero">

<div class="stack">
<div class="drop-in-animation profile-img-glow">
</div>
<img loading="eager" class="drop-in-animation elevated-hover profile-img" src="/imgs/profile.png" />
</div>

<div class="flex-1 hero-text">
<h1> Hi I'm Luke <span class="hand">👋🏻</span></h1>

<blockquote class="blockquote badge-subtle">Passionate. Professional. Programmer.</blockquote>

<p>First off, let me introduce myself. I've been a programmer professionally for three plus years now and unprofessionally for as least nine. I'm currently doing lots of work on the frontend of things, focusing on web development but also some mobile stuff. I have many passions and hobbies but you can find out more about my personal life <a href="/personal">here</a>. If you are looking for a more official resume look <a href="resume">here</a>. </p>
</div>
</div>

---

## Education

### University of Arkansas <span class="badge">2019 - 2021</span>

-   Bachelors in computer science

### Ozark community college <span class="badge">2016 - 2018</span>

-   Associates in information technology

## Professional work

### Visa - Design engineer <span class="badge">2021 - now</span>

-   Frontend application development
    -   Built demos, prototypes, and full applications with Angular, Dart, Flutter, React, and TypeScript
    -   Team lead for project and technology
-   Design system library
    -   Libraries used by most UI developers at Visa (2000+)
    -   Architect of React library
        -   Achieved 100% test coverage
        -   Added strict type safety
        -   Record breaking build times
        -   Shrank bundle size by 60%
    -   Assisted architecture and development of Angular library
    -   Built icons library
    -   Fixed hundreds of bugs
-   Strict accessibility requirements across all projects
-   Mentored many teammates, elevated skills across the entire team
-   Assist in interviewing and hiring new candidates for development

## Other work

### Darden restaurants - Server <span class="badge">2019 - 2021</span>

-   Maintained exceptional standards of customer service and efficient workflow during high-volume, fast-paced, operations
-   Assisted in training new team members on POS systems, effective guest interactions, and efficient workflow strategies

## Technologies
