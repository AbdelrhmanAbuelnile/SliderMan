import TypeIt from "typeit-react";

export default function RightSlide3(props) {
  const quote = props.type[2];
  return (
    <>
      <div className="content__main">
        <p>
          A podcast transcript is turned in to a small publishing house in Los
          Angeles. It turns out to be a piece of missing evidence in a murder
          investigation that ran cold. Take Fountain is the reprinting of that
          transcript, and only by reading the entire conversation can the murder
          be solved.
        </p>
        <p>
          Take Fountain is a truly unique novel that slowly simmers to boil as
          an interview between two filmmakers gives hints to the anatomy of a
          brutal murder.
        </p>
        <div className="frame">
          <a href="https://a.co/d/a9RdKLg" target="_blank">
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
      <h3 className="content__index">03</h3>
    </>
  );
}
