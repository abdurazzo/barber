import useSWR from "swr"
import axios from "axios"

const fetcher = async (...args) => {
  const res = await axios(...args)
  return res.data
}

const Section = () => {
  const { data } = useSWR('http://localhost:7777/products', fetcher)

  return (
    <section>
      <div className="container">
        <div className="section_main">
          <div className="parent">
          {data?.map((el) => {
            return (
              <div key={el?.id} className="cart">
                <img src={el.img} alt="" />
                <h2>{el?.name}</h2>

              </div>
            )
          })}
          </div>



          <div className="section_main_left">
            <h1>НАС ОБЪЕДИНЯЕТ ЛЮБОВЬ <br />К СВОЕЙ ПРОФЕССИИ</h1>
            <h2>и те эмоции, которыми с нами делятся наши посетители</h2>
            <p>Наш конечный результат — довольный клиент. Мы знаем, что <br />
              работая на результат, мы добьемся больше остальных и наши <br />
              посетители платят нам тем же — больше 70% возвращаются снова.</p>
          </div>
          <div className="section_main_right">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
