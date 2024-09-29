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
        block-size: 196px;
        border: 6px solid color-mix(in srgb, var(--surface-primary) 50%, transparent);
        border-radius: var(--border-radius);
        inline-size: 196px;
        transform: translateY(0);
    }

    .profile-img-glow{
        block-size: 100%;
        border-radius: var(--border-radius);
        filter: blur(16px);
        inline-size: 100%;
        overflow: hidden;
        position: absolute;

        &:before{
            animation: rotate 8s linear infinite;
            background: var(--hero-gradient);
            background-repeat: no-repeat;
            block-size:  150%;
            content: '';
            position: absolute;
            inline-size: 150% ;
            left: -25%;
            top: -25%;
        }
    }

    .stack{
        block-size:  fit-content;
        inline-size: fit-content ;
        position: relative;
    }


    @keyframes drop-in{
        0% {
            border-radius: 50%;
            opacity: 0%;
            transform: translateY(-2rem);
        }
        25% {
            border-radius: 50%;
            opacity: 100%;
        }
        100% {
            border-radius: var(--border-radius);
            opacity: 100%;
            transform: translateY(0);
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
<img loading="eager" class="drop-in-animation elevated-hover profile-img" src="/Portfolio/imgs/profile.png" />
</div>

<div class="flex-1 hero-text">
<h1> Hi I'm Luke <span aria-hidden="true" class="hand">👋🏻</span></h1>

<blockquote class="badge badge-subtle blockquote">Passionate. Professional. Programmer.</blockquote>

<p>Let me introduce myself. I've been a programmer professionally for three plus years now and unprofessionally since 2016. I'm currently doing tons of work on the frontend, focusing on web development but also some mobile stuff. I have also many passions and hobbies. You can find all that and more on my <a href="/Portfolio/about-me">about me</a> page. </p>
</div>
</div>

---

## Education

### University of Arkansas <span class="badge">2019 - 2021</span>

<div class="list-styled">

-   Bachelors in computer science

</div>

### Ozark community college <span class="badge">2016 - 2018</span>

<div class="list-styled">

-   Associates in information technology

</div>

## Professional work

### Visa - Design engineer <span class="badge">2021 - now</span>

<div class="list-styled">

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

</div>

## Service work

### Darden restaurants - Server <span class="badge">2019 - 2021</span>

<div class="list-styled">

-   Maintained exceptional standards of customer service and efficient workflow during high-volume, fast-paced, operations
-   Assisted in training new team members on POS systems, effective guest interactions, and efficient workflow strategies

</div>

## Technologies
