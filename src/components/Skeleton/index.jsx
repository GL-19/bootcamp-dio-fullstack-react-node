import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Skeleton({ width, height }) {
  return (
    <LoadingSkeleton width={width} height={height} />
  )
}

const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  } 
`;

const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width };
  height: ${(props) => props.height };
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;