import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Tutorials() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

  const TutorialBox = props => (
    <a href={props.link} className="tutorial-box">
      <div className="how-to">
        <h5>{props.title}</h5>
        <hr></hr>
        <p>{props.des}</p>
      </div>
    </a>
  );

    return (
        <Layout 
            title={`Tutorials`}
            description="A Website To Teach Everything About PocketMine-MP"
        >
            <div className="section">
                <div className="container">
                    <div className="post">
                        <header className="postHeader t-header">
                            <h1>Tutorials</h1>
                            <hr></hr>
                        </header>
                        <div className="tutorial-grid">
                            <TutorialBox
                            link="htmap/introduction"
                            title="How to Make a Plugin"
                            des="Learn on how to make a PocketMine plugin." 
                            />
                            <TutorialBox
                            link="pm3/htufa/introduction"
                            title="How to Use FormAPI (PM3)"
                            des="Ever wanted to create forms? Here is a guide." 
                            />
                            <TutorialBox
                            link="pm3/htuim/introduction"
                            title="How to Use InvMenu (PM3)"
                            des="Do you want to make inventory menus? Learn how to do it here." 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Tutorials;
