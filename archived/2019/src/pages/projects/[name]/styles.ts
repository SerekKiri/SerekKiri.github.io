import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #000000;
    font-family: 'Patrick Hand', cursive;
`

const Dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
    }
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
    }
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);
    }
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
    }}
`

const Loading = styled.div`
    width: 100vw;
    display: flex;
    font-size: 24px;
    justify-content: center;

    :after {
        content: ' .';
        margin-left: 4px;
        animation: ${Dots} 1s steps(5, end) infinite;
    }
`

const Span = styled.span`
    color: #1DB954;
    margin: 0 6px;
`

const NotFound = styled.div`
    width: 100vw;
    display: flex;
    font-size: 24px;
    justify-content: center;
`

export { Wrapper, Loading, Span, NotFound }