import React, { Fragment } from "react";
import { SkillData } from "./skills-data";
import "./skills.styles.css";

export const Skills = () => {
  return (
    <Fragment>
      <section className="skills" id="habilidades">
        <div className="skills-wrapper">
          <h2 className="title">Habilidades</h2>

          <div className="skills-content">
            <div className="skill-class-1">
              <div className="column left">
                <div>
                  <div className="text">Ingeniería</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos, ratione error est recusandae consequatur, iusto
                    illum deleniti quidem impedit, quos quaerat quis minima
                    sequi. Cupiditate recusandae laudantium esse, harum animi
                    aspernatur quisquam et delectus ipsum quam alias quaerat?
                    Quasi hic quidem illum. Ad delectus natus aut hic explicabo
                    minus quod.
                  </p>
                  {/* <a href="#">Read more</a> */}
                </div>
              </div>
              <div className="column right">
                {SkillData.engineering.map((skill, index) => (
                  <div className="bars">
                    <span className="skill__card" key={index}></span>
                    <div className="info">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <progress
                      className="line"
                      max="100"
                      value={skill.percent}
                    ></progress>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-class-2">
              <div className="column left">
                <div className="text">Front-End Web Development</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, ratione error est recusandae consequatur, iusto
                  illum deleniti quidem impedit, quos quaerat quis minima sequi.
                  Cupiditate recusandae laudantium esse, harum animi aspernatur
                  quisquam et delectus ipsum quam alias quaerat? Quasi hic
                  quidem illum. Ad delectus natus aut hic explicabo minus quod.
                </p>
                {/* <a href="#">Read more</a> */}
              </div>
              <div className="column right">
                {SkillData.frontEndDev.map((skill, index) => (
                  <div className="bars">
                    <span className="skill__card" key={index}></span>
                    <div className="info">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <progress
                      className="line"
                      max="100"
                      value={skill.percent}
                    ></progress>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-class-3">
              <div className="column left">
                <div className="text">Back-End-Web Development</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, ratione error est recusandae consequatur, iusto
                  illum deleniti quidem impedit, quos quaerat quis minima sequi.
                  Cupiditate recusandae laudantium esse, harum animi aspernatur
                  quisquam et delectus ipsum quam alias quaerat? Quasi hic
                  quidem illum. Ad delectus natus aut hic explicabo minus quod.
                </p>
                {/* <a href="#">Read more</a> */}
              </div>
              <div className="column right">
                {SkillData.backEndDev.map((skill, index) => (
                  <div className="bars">
                    <span className="skill__card" key={index}></span>
                    <div className="info">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <progress
                      className="line"
                      max="100"
                      value={skill.percent}
                    ></progress>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
