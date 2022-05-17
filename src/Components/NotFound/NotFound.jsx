import notfound from '../../Assets/Images/404.svg';

const NotFound = (props) => {
  return (
    <section className="notfound">
      <h3 className="notfound__title">
        404
      </h3>
      <p className='notfound__subtitle'>
        Пока мы еще не создали этот проект, но всё впереди...
      </p>
      <img className='notfound__image' src={notfound} alt='404' />
    </section>
  )
}

export default NotFound;