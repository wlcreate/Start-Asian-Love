import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";

export default function About() {
    return (
        <div>
            <Header/>
            <h1>About Page</h1>
            <div>
                <h3>Waverley Leung</h3>
                <p>Quote: "It is good to have an end to journey toward; but it is the journey that matters in the end." - Ernest Hemingway</p>
                <p>Bio: Born and raised in NYC, Waverley Leung is a proud "ABC" (American Born Chinese). She has a creative background as a dancer and arts administrator, and has found a new way to express herself through coding. As someone with many interests, Waverley embraces being a beginner and is passionate about learning, growth, collaboration, diversity, inclusion, and interacting with empathy. Through Start Asian Love, Waverley hopes to inspire others to unite under a common goal and find ways they can use their skills to stand up for their values. In her free time, you can often find Waverley listening to K-pop, watching (another) anime and/or K-drama, and exploring culture through food.</p>
            </div>
            <div>
            <h3>Emmanuel Jose</h3>
                <p>Quote: “Do not go where the path may lead, go instead where there is no path and leave a trail.” - Ralph Waldo Emerson</p>
                <p>Bio: Born in Quezon City in the Philippines, Emmanuel Jose immigrated to the United States at the age of 6. Emmanuel is a proud gay Filipino American and artist-turned-coder, with a penchant for turning paper into art. He views tech as an exciting, evolving medium full of possibility, believes that inaction is not an option, and hopes that Start Asian Love becomes a platform for education, expression, and empowerment for all. In his free time, Emmanuel can be found with his partner wheeling their two spoiled rescue pups in a stroller on the streets of Washington Heights in New York City.</p>
            </div>
            <div>
                <h3>Sandy Dai</h3>
                <p>Quote:  "The tragedy of life is not death but what we let die inside of us while we live." - Robin S.Sharma</p>
                <p>Bio: Sandy Dai is a Chinese-American software developer from NYC. Growing up with immigrant parents and spending a majority of her adolescent school years in Manhattan Chinatown gave her a personal attachment to her heritage and the lively neighborhood. Amidst the rising number of anti-Asian hate crimes reported all over social media, she was immediately drawn to Start Asian Love’s initiative and knew she wanted to be a part of it. In her free time, you can find Sandy at the latest food spots or exploring the coolest attractions NYC always has to offer.</p>
            </div>
            <div>
                <h3>Daniel Kwon</h3>
                <p>Quote: "Life is either a daring adventure or nothing at all." - Helen Keller</p>
                <p>Bio: Born in the city of Suwon in South Korea, Daniel immigrated to the United States at the age of 2 to Queens, New York. Shaped by his upbringing and healthcare background, Daniel views coding as a powerful engine for social good and collaboration. Through Start Asian Love, Daniel hopes to combat AAPI hate through empowerment, education and by reclaiming the narrative around the AAPI experience in America. During his free time, you can find Daniel and his fiancée strolling through Riverside Park and rock climbing (mostly falling) at Steep Rock West.</p>
            </div>
            <Footer/>
        </div>
    )
}