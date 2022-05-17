import maria from '../../Assets/Images/maria.jpg';
import stas from '../../Assets/Images/stas.jpg';

const About = (props) => {
  return(
    <section className='about'>
      <article className='about__content'>
        <img className='about__image' src={maria} alt='Мария Вохмянина' />
        <div className='about__information'>
          <h2 className='about__title'>
            Мария Вохмянина
          </h2>
          <h3 className='about__subtitle'>
            Креативный директор
          </h3>
          <p className='about__text'>
            Закончила МГУПечати. С недавних пор живу в Сочи. С 2004 года работаю как графический дизайнер, специализируюсь на фирменном стиле, веб-дизайне и дизайне любой полиграфической продукции.
          </p>
          <p className='about__text'>
            Люблю буквы, простоту и разумность, стремлюсь к чистоте линий, свободному пространству, эстетике минимализма. Люблю находить красоту в деталях, не забывая о целом, открывать что-то новое, удивляться и удивлять. 
          </p>
          <p className='about__text'>
            Вдохновляют: новое, смелое, музыка, путешествия, европейский дизайн, красивые люди, архитектурные линии, море, любовь. Буду рада плодотворному и приятному сотрудничеству!          
          </p>
        </div>
      </article>
      <article className='about__content about__content_direction_reverse'>
        <img className='about__image' src={stas} alt='Стас Вохмянин' />
        <div className='about__information'>
          <h2 className='about__title'>
            Стас Вохмянин
          </h2>
          <h3 className='about__subtitle'>
            Менеджер по работе с клиентами
          </h3>
          <p className='about__text'>
            Делаю клиентов счастливыми c момента согласования деталей заказа до получения готовой работы. Пытаюсь вывести клиентский сервис на новый уровень.          </p>
          <p className='about__text'>
            Занимаюсь версткой, особое внимание уделяю техническим аспектам возникающих задач, совершенствуюсь и изучаю новое по мере выполнения проекта.          </p>
          <p className='about__text'>
            Считаю честность перед клиентом важной частью отношений, которая поможет построить и сохранить партнерство на долгие годы.          </p>
        </div>
      </article>


    </section>
  )
}

export default About;