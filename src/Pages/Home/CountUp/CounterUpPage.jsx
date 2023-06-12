import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUpPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="stats shadow w-full bg-red-50 py-20 my-14">
        <div className="stat place-items-center">
          <div className="stat-value font-semibold text-5xl text-red-400 font-mono">
            {counterOn && <CountUp start={0} end={1245} duration={4} delay={0} />}
          </div>
          <div className="stat-title mt-4 font-medium text-xl uppercase">FINISHED SESSIONS</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value font-semibold text-5xl text-red-400 font-mono"> {counterOn && <CountUp start={0} end={3742} duration={4} delay={0} />}</div>
          <div className="stat-title mt-4 font-medium text-xl uppercase">ENROLLED LEARNERS</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value font-semibold text-5xl text-red-400 font-mono">
          {counterOn && <CountUp start={0} end={350} duration={4} delay={0} />}
          </div>
          <div className="stat-title mt-4 font-medium text-xl uppercase">ONLINE INSTRUCTORS</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value font-semibold text-5xl text-red-400 font-mono"> {counterOn && <CountUp start={0} end={100} duration={4} delay={0} />}%</div>
          <div className="stat-title mt-4 font-medium text-xl uppercase">SATISFACTION RATE</div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;