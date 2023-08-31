import TypeIt from "typeit-react";

export default function RightSlide4(props) {
  const quote = props.type[3]
  return (
    <>
      <div className="content__main alotOfText">
        <p>
          In the tradition of Mark Z. Danielewski's House of Leaves and P.T.
          Anderson's Magnolia, Adam Novak explores the city of angels and demons
          in his third novel Freaks of the Industry.
        </p>
        <p>
          Studio executive Rodney Muir quits the business after a prostitution
          scandal and returns home to Washington, DC where he falls for two
          women, the unhappy wife of a diplomat who harbors a dark secret and a
          federal agent investigating a Starbucks triple homicide who uncovers a
          White House conspiracy that threatens them all.
        </p>
        <p>
          Low-budget horror filmmaker Thor Rosenthal gets a shot at the big time
          when homeless junkie turned Oscar-winning movie star Antwon Legion
          agrees to star in his desert thriller about a carpenter named Jesus
          investigating a serial killer stalking Mary Magdalene in Golgotha. The
          only problem is the movie star playing the messiah might be the
          Anti-Christ.
        </p>
        <p>
          Larry Mersault works at the oldest talent agency in Hollywood as the
          script reader for Antwon Legion. Juggling the insatiable daughter of
          the agency chairman with endless script coverage requests, Larry is
          ordered to assassinate Legion by the chairman and break up with his
          daughter, forced choose between a career he loves and the people he
          loves the most.
        </p>
        <div className="frame">
          <a href="https://a.co/d/hEKXbFR" target="_blank">
            <button className="custom-btn btn-12">
              <span>Hurry!</span>
              <span>Buy Now</span>
            </button>
          </a>
        </div>
        <br />
        <div className="quotes">
          <div className="quotes">
            <TypeIt 
                options={{
                  loop: true,
                  waitUntilVisible: true,
                }}
              >
                <p className="quote">{quote.quote}</p>
              </TypeIt>
            <p className="author">{quote.author}</p>
            <p className="affiliation">{quote.affiliation}</p>
          </div>
        </div>
      </div>
      <h3 className="content__index">04</h3>
    </>
  );
}
