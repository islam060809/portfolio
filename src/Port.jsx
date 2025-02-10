import React, { useRef, useState } from 'react';
import './App.scss';
import img from "./assets/img.jpg"
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { RiTelegram2Fill } from "react-icons/ri";
import emailjs from '@emailjs/browser';

const Port = () => {

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm('service_iu00dog', 'template_nahvvtv', form.current, {
    //             publicKey: '4WFI4YoSE9k6qz-rT',
    //         })
    //         .then(
    //             () => {
    //                 alert("Сообщение отправлено")
    //                 e.target.user_name.value = ""
    //                 e.target.user_email.value = ""
    //                 e.target.message.value = ""
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //                 alert(error.text);
    //             },
    //         );
    // };

    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Отправка...");

        emailjs
            .sendForm("service_ok4jcu5", "template_u1mfgsl", form.current, "4WFI4YoSE9k6qz-rT")
            .then(
                (result) => {
                    console.log("Success:", result.text);
                    setStatus("Сообщение отправлено!");
                    form.current.reset();
                },
                (error) => {
                    console.error("Ошибка:", error.text);
                    setStatus("Ошибка отправки");
                }
            );
    };


    return (
        <div id='hero' className="portfolio">
            <header className="header">
                <h1 className="logo" onClick={() => handleScroll('hero')}>ТАБАЕВ ИСЛАМ </h1>
                <nav>
                    <ul className="nav-links">
                        <li onClick={() => handleScroll('hero')}>ДОМ</li>
                        <li onClick={() => handleScroll('about')}>ОБО МНЕ</li>
                        <li onClick={() => handleScroll('projects')}>ПРОЕКТЫ</li>
                        <li onClick={() => handleScroll('contact')}>КОНТАКТ</li>
                    </ul>
                </nav>
            </header>

            <section
                id="home"
                className="section"
            >
                <div className="all">
                    <h1>ПРИВЕТ, Я ТАБАЕВ ИСЛАМ.</h1>
                    <p>Веб-разработчик, ориентированный на результат, создающий и управляющий <br /> веб-сайтами и веб-приложениями, что приводит к успеху всего продукта.</p>
                    <button onClick={() => handleScroll('projects')} className='btn-f'>ПРОЕКТЫ</button>
                    <div className="contakts-home">
                        <a style={{ color: "black" }} target="_blank" href="https://www.linkedin.com/in/%D0%B8%D1%81%D0%BB%D0%B0%D0%BC-%D1%82%D0%B0%D0%B1%D0%B0%D0%B5%D0%B2-78365332a/">
                            <FaLinkedin className='icon' />
                        </a>
                        <a style={{ color: "black" }} target="_blank" href="https://github.com/islam060809">
                            <IoLogoGithub className='icon' />
                        </a>
                        <a style={{ color: "black" }} target="_blank" href="https://t.me/sachashulgin">
                            <RiTelegram2Fill className='icon' />
                        </a>
                    </div>
                </div>
            </section>


            <section
                id="about"
                className="section"
            >
                <h2 className='h2'>ОБО МНЕ</h2>
                <div className="per"></div>
                <p className='p'>Здесь вы найдете больше информации обо мне, чем я занимаюсь и моих текущих <br />
                    навыках, в основном в области программирования и технологий.</p>
                <div className="all">
                    <div className="left">
                        <h3>Познакомьтесь со мной поближе!</h3>
                        <p>Меня зовут Ислам Табаев, и я начинающий разработчик в сфере Front-end. <br />
                            Моя карьера в IT началась с обучения на шестимесячном курсе в OKURMEN-IT, где я освоил основы веб-разработки и получил первые практические навыки. <br />
                            На данный момент я прохожу стажировку в OKURMEN-PRO, где работаю над реальными проектами, совершенствую свои знания и учусь применять их в командной работе. <br />
                            Несмотря на то, что мой опыт пока невелик, я уже успел участвовать в разработке интерфейсов, верстке адаптивных сайтов и интеграции API. <br />
                            Работа в команде дала мне понимание важности коммуникации, ответственности и стремления к общему результату. <br />
                            В будущем я планирую развиваться как профессионал, участвовать в крупных проектах и стать полноценным членом IT-сообщества, внося свой вклад в создание современных и удобных цифровых решений.</p>
                        <button className='btn-f' onClick={() => handleScroll('contact')}>Контакт</button>
                    </div>

                    <div className="skills">
                        <h3>Навыки</h3>
                        <div className="skills-list">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">React</div>
                            <div className="skill">Redux</div>
                            <div className="skill">Redux Toolkit</div>
                            <div className="skill">Bootstrap </div>
                            <div className="skill">Git</div>
                            <div className="skill">Figma</div>
                            <div className="skill">VS Code</div>
                            <div className="skill">API</div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="projects"
                className="section"
            >
                <h2 className='h2'>ПРОЕКТЫ</h2>
                <div className="per"></div>
                <p className='p'>Здесь вы найдете некоторые из моих личных и клиентских проектов, каждый из которых содержит <br />
                    собственное тематическое исследование.</p>
                <div className="projects-grid">
                    <div className="project-card">
                        <img src={img} alt="Проект 1" className="project-image" />
                        <div className="text">
                            <h3>Проект 1</h3>
                            <p>Dopefolio — это успешный проект с открытым исходным кодом, который я создал и который был представлен на некоторых крупнейших технических сайтах, таких как CSS-Tricks, Hostinger и т. д., и используется тысячами разработчиков по всему миру.</p>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <button className='btn-f'>  Посмотреть на GitHub</button></a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={img} alt="Проект 1" className="project-image" />
                        <div className="text">
                            <h3>Проект 1</h3>
                            <p>Dopefolio — это успешный проект с открытым исходным кодом, который я создал и который был представлен на некоторых крупнейших технических сайтах, таких как CSS-Tricks, Hostinger и т. д., и используется тысячами разработчиков по всему миру.</p>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <button className='btn-f'>  Посмотреть на GitHub</button></a>                        </div>
                    </div>
                    <div className="project-card">
                        <img src={img} alt="Проект 1" className="project-image" />
                        <div className="text">
                            <h3>Проект 1</h3>
                            <p>Dopefolio — это успешный проект с открытым исходным кодом, который я создал и который был представлен на некоторых крупнейших технических сайтах, таких как CSS-Tricks, Hostinger и т. д., и используется тысячами разработчиков по всему миру.</p>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <button className='btn-f'>  Посмотреть на GitHub</button></a>                        </div>
                    </div>
                </div>
            </section>


            {/* <section
                id="contact"
                className="section"
            >
                <h2 className='h2'>Контакт</h2>
                <div className="per"></div>
                <p className='p'>Не стесняйтесь связаться со мной, заполнив форму ниже, и я свяжусь с вами как можно <br />
                    скорее.</p>
                <div className="form-box">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Имя</label>
                        <input className='inp' type="text" name="user_name" placeholder='Введите ваше имя' />
                        <label>Электронная почта</label>
                        <input className='inp' type="email" name="user_email" placeholder='Введите свой одрес электронной почты' />
                        <label>Сообщение</label>
                        <textarea className='inp' name="message" placeholder="Введите ваше сообщение" />
                        <input className='btn-f' type="submit" value="Отправить" />
                    </form>
                </div>
            </section> */}

            <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Свяжитесь с нами</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Ваше имя"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Ваш email"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Ваше сообщение"
                        className="w-full p-2 border rounded-md"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Отправить
                    </button>
                </form>
                {status && <p className="mt-2 text-sm text-center">{status}</p>}
            </div>


            <footer className="footer">
                <div className="footer-all">
                    <div className="all">
                        <div className="left">
                            <h3 className='р3'>ТАБАЕВ ИСЛАМ</h3>
                            <p>Веб-разработчик, ориентированный на фронтенд, создающий <br />
                                фронтенд веб-сайтов и веб-приложений, что приводит к успеху всего <br />
                                продукта.</p>
                        </div>
                        <div className="right">
                            <h3 className='h3'>СОЦИАЛЬНЫЙ</h3>
                            <div className="icons">
                                <a style={{ color: "white" }} target="_blank" href="https://www.linkedin.com/in/%D0%B8%D1%81%D0%BB%D0%B0%D0%BC-%D1%82%D0%B0%D0%B1%D0%B0%D0%B5%D0%B2-78365332a/">
                                    <FaLinkedin className='icon' />
                                </a>
                                <a style={{ color: "white" }} target="_blank" href="https://github.com/islam060809">
                                    <IoLogoGithub className='icon' />
                                </a>
                                <a style={{ color: "white" }} target="_blank" href="https://t.me/sachashulgin">
                                    <RiTelegram2Fill className='icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className='end'>© Copyright 2025. Made by Tabaev Islam</p>
                </div>
            </footer>
        </div>
    );
};

export default Port;
