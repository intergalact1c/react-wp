import React from "react"
import { useDispatch } from "react-redux"
import { openModal } from "../../../redux/actions"
import parse from "html-react-parser"
import { Element, scroller } from "react-scroll"
//import PropTypes from "prop-types"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

import Layout from "../../layout/layout"
import Feedback from "../../feedback/feedback"

import * as ServicesIcons from "../../../images/services-icons"
import * as TechnologiesLogos from "../../../images/technologies-logos"
import * as CustomersLogos from "../../../images/customers-logos"

const services = [
  {
    icon: ServicesIcons.icon1,
    title: "Контекстная реклама",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
  {
    icon: ServicesIcons.icon2,
    title: "Сквозная аналитика и calltracking",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
  {
    icon: ServicesIcons.icon3,
    title: "Соцсети",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
  {
    icon: ServicesIcons.icon4,
    title: "Web & mobile design",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
  {
    icon: ServicesIcons.icon5,
    title: "Разработка мобильных приложений",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
  {
    icon: ServicesIcons.icon6,
    title: "RFM анализ",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
  {
    icon: ServicesIcons.icon7,
    title: "Web разработка",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
  {
    icon: ServicesIcons.icon8,
    title: "Видеопродакшн и реклама на youtube",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
  {
    icon: ServicesIcons.icon9,
    title: "SEO",
    description: [
      "Поисковая реклама Yandex и Google",
      "Реклама в рекламной сети яндекса (РСЯ)",
      "Смарт баннеры",
      "Ремаркетинг",
      "Динамический ремаркетинг",
    ],
  },
]
const technologies = [
  {
    logo: TechnologiesLogos.logo1,
    title: "CoMagic",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo2,
    title: "Instagram",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo3,
    title: "Jivosite",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo4,
    title: "Power BI",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo5,
    title: "Яндекс.Директ",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo6,
    title: "Alytics",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo7,
    title: "VKontakte",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo8,
    title: "myTarget",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo9,
    title: "Facebook",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo1,
    title: "CoMagic",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo1,
    title: "CoMagic",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
  {
    logo: TechnologiesLogos.logo1,
    title: "CoMagic",
    description:
      "CoMagic — это платформа для комплексной маркетинг-аналитики с широким функционалом и сервисом коллтрекинга",
  },
]
const customers = [
  {
    logo: CustomersLogos.logo1,
    title: "Dr. Sea",
  },
  {
    logo: CustomersLogos.logo2,
    title: "RS Logistics",
  },
  {
    logo: CustomersLogos.logo3,
    title: "Богородский кирпич",
  },
  {
    logo: CustomersLogos.logo4,
    title: "Симона",
  },
  {
    logo: CustomersLogos.logo5,
    title: "Арктика",
  },
  {
    logo: CustomersLogos.logo6,
    title: "Александрия",
  },
  {
    logo: CustomersLogos.logo7,
    title: "Профград",
  },
  {
    logo: CustomersLogos.logo8,
    title: "Intermoda",
  },
  {
    logo: CustomersLogos.logo9,
    title: "Cronos Premium",
  },
  {
    logo: CustomersLogos.logo10,
    title: "АвтоГАЗцентр-Вираж",
  },
]

const FrontPage = ({ pageContext }) => {
  const dispatch = useDispatch()
  const [isTechOpen, setTechIsOpen] = React.useState(false)
  const { FrontPage } = pageContext
  const { fpBannerText, fpBannerImg } = FrontPage.fpBanner

  const onClickButton = () => {
    setTechIsOpen(!isTechOpen)
    if (isTechOpen) {
      scroller.scrollTo("scroll-to-top", {
        duration: 1000,
        delay: 200,
        smooth: "linear",
      })
    } else {
      scroller.scrollTo("scroll-to-bottom", {
        duration: 1000,
        delay: 200,
        smooth: "linear",
        offset: -30,
      })
    }
  }

  return (
    <Layout pageContext={pageContext}>
      <div
        className="home-banner"
        style={{
          backgroundImage: "url(" + fpBannerImg.sourceUrl + ")",
        }}
      >
        <Container fluid="xl">
          <Row>
            <div className="col-4">
              {fpBannerText && (
                <p className="home-banner__text">{parse(fpBannerText)}</p>
              )}
            </div>
            <div className="col-auto">
              <div className="home-banner__slogan">
                <div className="home-banner__slogan-item">
                  <span className="home-banner__word home-banner__word_pink">
                    PERFORMANCE
                  </span>
                </div>
                <div className="home-banner__slogan-item">
                  <span className="home-banner__word home-banner__word_yellow">
                    MARKETING
                  </span>
                </div>
                <div className="home-banner__slogan-item">
                  <span className="home-banner__word home-banner__word_blue">
                    360
                  </span>
                </div>
              </div>
              <Button variant="primary" onClick={() => dispatch(openModal())}>
                Начать проект
              </Button>
            </div>
          </Row>
        </Container>
      </div>
      <div className="home-block_services home-block">
        <Container fluid="xl">
          <h2 className="home-block__title">Услуги</h2>
          <Row>
            {services.map(service => (
              <div key={service.title} className="col-4">
                <div className="home-block_services__inner">
                  <div className="home-block_services__icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h3 className="home-block_services__title">
                    {service.title}
                  </h3>
                  <span className="home-block_services__arrow" />
                  {service.description && (
                    <div className="home-block_services__description">
                      <ul>
                        {service.description.map(item => (
                          <li key={item}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </div>
      <div className="home-block_technologies home-block">
        <Container fluid="xl">
          <Element name="scroll-to-top" />
          <h2 className="home-block__title">Технологии</h2>
          <Row
            className={`${"home-block_technologies__items"} ${
              isTechOpen ? "expanded" : "collapsed"
            }`}
          >
            {technologies.map((technology, index) => (
              <div key={index} className="col-4">
                <div className="home-block_technologies__inner">
                  <div className="home-block_technologies__logo">
                    <img src={technology.logo} alt={technology.title} />
                  </div>
                  <div className="home-block_technologies__description">
                    {technology.description}
                  </div>
                </div>
              </div>
            ))}
            <Element name="scroll-to-bottom" />
          </Row>
          <div className="home-block_technologies__bottom">
            {!isTechOpen ? (
              <Button variant="outline-primary" onClick={onClickButton}>
                Показать еще
              </Button>
            ) : (
              <Button variant="primary" onClick={onClickButton}>
                Свернуть
              </Button>
            )}
          </div>
        </Container>
      </div>
      <div className="home-block_indicators home-block">
        <Container fluid="xl">
          <Row>
            <div className="col-4">
              <h2 className="home-block__title">Цифры</h2>
            </div>
            <div className="col-8">
              <div className="home-block_indicators__group">
                <div className="home-block_indicators__group-item">
                  <span className="home-block_indicators__figure">8+</span>
                  <span className="home-block_indicators__text">
                    Лет на рынке digital агенств
                  </span>
                </div>
                <div className="home-block_indicators__group-item">
                  <span className="home-block_indicators__figure">200+</span>
                  <span className="home-block_indicators__text">
                    Активных рекламных кампаний
                  </span>
                </div>
                <div className="home-block_indicators__group-item">
                  <span className="home-block_indicators__figure">6500+</span>
                  <span className="home-block_indicators__text">
                    Активных групп объявлений
                  </span>
                </div>
                <div className="home-block_indicators__group-item">
                  <span className="home-block_indicators__figure">
                    3.000.000+
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <div className="background">
          <div className="background__logo background__logo_color" />
        </div>
      </div>
      <div className="home-block_customers home-block">
        <div className="home-block_customers__top">
          <Container fluid="xl">
            <Row>
              <div className="col-4">
                <h2 className="home-block__title">Нам доверяют</h2>
              </div>
              <div className="col-8">
                <p className="home-block_customers__text">
                  Для наших клиентов Colors Croup — своеобразный знак качества.
                  Благодаря нашим услугам многие компании уже вышли на новый
                  уровень и преуспевают. Не упустите шанс оказаться среди них!
                </p>
              </div>
            </Row>
          </Container>
        </div>
        <div className="home-block_customers__bottom">
          <Container fluid="xl">
            <Row className="row-cols-5">
              {customers.map(customer => (
                <div
                  key={customer.title}
                  className="home-block_customers__logo col"
                >
                  <img src={customer.logo} alt={customer.title} />
                </div>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <Feedback />
    </Layout>
  )
}

FrontPage.defaultProps = {}

FrontPage.propTypes = {}

export default FrontPage
