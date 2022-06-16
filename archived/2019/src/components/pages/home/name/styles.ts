import styled, { keyframes } from 'styled-components/macro'

const glitch = keyframes`
    0% { 
        text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
            -0.05em -0.025em 0 rgba(0,255,0,.75), 
            -0.025em 0.05em 0 rgba(0,0,255,.75);
    }

    19% {
        text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
            -0.05em -0.025em 0 rgba(0,255,0,.75), 
            -0.025em 0.05em 0 rgba(0,0,255,.75);
    }

    20% { 
        text-shadow: -0.05em -0.025em 0 rgba(255,0,0,.75),
            0.025em 0.025em 0 rgba(0,255,0,.75), 
            -0.05em -0.05em 0 rgba(0,0,255,.75);
    }

    49% {
        text-shadow: -0.05em -0.025em 0 rgba(255,0,0,.75),
            0.025em 0.025em 0 rgba(0,255,0,.75), 
            -0.05em -0.05em 0 rgba(0,0,255,.75);
    }

    50% { 
        text-shadow: 0.025em 0.05em 0 rgba(255,0,0,.75),
            0.05em 0 0 rgba(0,255,0,.75), 
            0 -0.05em 0 rgba(0,0,255,.75);
    }

    99% {
        text-shadow: 0.025em 0.05em 0 rgba(255,0,0,.75),
            0.05em 0 0 rgba(0,255,0,.75), 
            0 -0.05em 0 rgba(0,0,255,.75);
    }

    100% { 
        text-shadow: -0.025em 0 0 rgba(255,0,0,.75),
            -0.025em -0.025em 0 rgba(0,255,0,.75), 
            -0.025em -0.05em 0 rgba(0,0,255,.75);
    }
`

const Wrapper = styled.div`
    font-size: 5rem;
    font-weight: 400;
    position: relative;
    text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
        -0.025em -0.05em 0 rgba(0,255,0,.75), 
        0.025em 0.05em 0 rgba(0,0,255,.75);
    animation: ${glitch} 1000ms infinite;
    margin: 0 0 0 24px;
`

const NameSpan = styled.span`
    top: 0;
    left: 0;
    position: absolute;

    :first-child {
        opacity: 0.8;
        animation: ${glitch} 1250ms infinite;
        transform: translate(-.025em -0.0125em);
        clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }

    :last-child {
        opacity: 0.8;
        animation: ${glitch} 620ms infinite;
        transform: translate(.0125em 0.025em);
        clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    }
`

export { Wrapper, NameSpan }