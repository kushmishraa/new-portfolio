import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal";


export const SlideShowSvg = () => {
    const [workHistory, setWorkHistory] = useState<any>();
    const [animationKey, setAnimationKey] = useState(0);

    const workHistoryListing = ["/Svg/nextjs.svg", "/Svg/nodejs-icon.svg", "/Svg/React-icon.svg", "/Svg/docker-tile.svg"]

    const workHistoryTimeline = () => {
        let index = 0;
        let currHistory = workHistoryListing[index];

        setInterval(() => {
            if (index == workHistoryListing.length) {
                index = 0;
                setWorkHistory(workHistoryListing[index]);
            }
            currHistory = workHistoryListing[index];
            setWorkHistory(currHistory);
            setAnimationKey(prevKey => prevKey + 1)

            index++;
        }, 1500)
    }


    useEffect(() => {
        workHistoryTimeline()
    }, [])

    return (
        <Fade triggerOnce={false} key={animationKey} className="w-full h-full">
            {workHistory && <img src={workHistory} alt="img" width={"100%"} height={"100%"} />}
        </Fade>
    )
}