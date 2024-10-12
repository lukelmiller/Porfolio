<style>
    h2, h3{
        .brand {
            inline-size: 100%;
            max-block-size: 1.5rem;
            max-inline-size: 1.5rem;
        }
    }
    .drop-in-animation{
        animation: drop-in forwards 4s 1;
        animation-delay: 2s;
        border-radius: 50%;
        opacity: 0%;
        transform: translateY(-2rem);
    }

    .hand {
        animation: wave forwards 0.9s 3;
        animation-delay: 5.5s;
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
        animation-duration: 3s;
        animation-name: drop-in;
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
        }
        50%{
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
<img loading="eager" class="drop-in-animation elevated-hover profile-img" src="/Portfolio/imgs/profile.jpg" />
</div>

<div class="flex-1 hero-text">
<h1> Hi I'm Luke <span aria-hidden="true" class="hand">👋🏻</span></h1>

<blockquote class="badge badge-subtle blockquote">Passionate. Professional. Programmer.</blockquote>

<p>Let me introduce myself. I've been a professional programmer for over three years, with experience dating back to 2016. I’m currently focused on frontend development, specializing in web projects and some mobile work. I also have a wide range of passions and hobbies, which you can explore further on my <a class="link" href="/Portfolio/about-me">about me</a> page.</p>
</div>
</div>

---

## Education

### <span class="flex-1 gap-4 row align-center"><img alt="" class="brand margin-right-4" src="/Portfolio/brands/uark.svg"/> University of Arkansas</span> <span class="badge">2019 - 2021</span>

<div class="list-styled">

-   Bachelors in computer science

</div>

### <span class="flex-1 gap-4 row align-center"><img alt="" class="brand margin-right-4" src="/Portfolio/brands/otc.svg"/> Ozark community college</span> <span class="badge">2016 - 2018</span>

<div class="list-styled">

-   Associates in information technology

</div>

## Professional work

### <span class="flex-1 gap-4 row align-center"><img alt="" class="brand margin-right-4" src="/Portfolio/brands/visa-equity.svg"/> Visa - Design engineer</span> <span class="badge">2022 - now</span>

<div class="list-styled">

-   All previous responsibilities
-   Technical and team lead for React and/or TypeScript projects
-   Design system library
    -   Required maximum flexibility for 2000+ internal dev user base
    -   Architect of React library
        -   Achieved 100% test coverage
        -   Added strict type safety
        -   Reduced build times in half
        -   Shrank bundle size by 60%
    -   Architect of icons libraries
        -   Dedicated libraries for Angular, Flutter, HTML, and React
        -   Allowed for tree shaking, improved consuming dev experience, and completely type safe
    -   Assisted architecture and development of Angular library
        -   Reduced build times by 15%
        -   Reduced bundles size of consuming apps by up to 50%
        -   Full migration to standalone components
    -   Fixed hundreds of bugs
-   Mentored many teammates, elevated skills across the entire team
-   Taught in internal learning sessions
-   Assisted in interviewing and hiring new candidates for development

</div>

### <span class="flex-1 gap-4 row align-center"><img alt="" class="brand margin-right-4" src="/Portfolio/brands/visa-equity.svg"/> Visa - Associate design engineer</span> <span class="badge">2021 - 2022</span>

<div class="list-styled">

-   Frontend application development
-   Built demos, prototypes, and full applications with Angular, Dart, Flutter, React, and TypeScript
-   Frequent presentations to stakeholders and consumers
-   Frequent communication between stakeholders, designers, accessibility, and fellow developers
-   Strict accessibility requirements across all projects

</div>

## Service work

### <span class="flex-1 gap-4 row align-center"><img alt="" class="brand margin-right-4" src="/Portfolio/brands/olive-garden.svg"/> Darden restaurants - Server</span> <span class="badge">2019 - 2021</span>

<div class="list-styled">

-   Maintained exceptional standards of customer service and efficient workflow during high-volume, fast-paced, operations
-   Assisted in training new team members on POS systems, effective guest interactions, and efficient workflow strategies

</div>

## Technologies
