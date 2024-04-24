"use client"
import React from 'react'
import WordCloud from 'react-d3-cloud';


type Props = {}
const data = [
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 2000 },
    { text: 'duck', value: 10 },
  ];

function CustomWordCloud({}: Props) {
  return (
    <WordCloud
    data={data}
    width={500}
    height={500}
    font="Times"
    fontStyle="italic"
    fontWeight="bold"
    fontSize={(word) => Math.log2(word.value) * 5}
    spiral="rectangular"
    rotate={0}
    padding={5}
    random={Math.random}
    onWordClick={(event, d) => {
      console.log(`onWordClick: ${d.text}`);
    }}
    onWordMouseOver={(event, d) => {
      console.log(`onWordMouseOver: ${d.text}`);
    }}
    onWordMouseOut={(event, d) => {
      console.log(`onWordMouseOut: ${d.text}`);
    }}
  />
  )
}

export default CustomWordCloud