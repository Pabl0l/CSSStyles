import './css/List.css'
import SimpleList from './SimpleList'
import Categories from './Categories'

const List = () => {

  return (
    <section className="cont cont-hijo-list" id='list'>
      <h2 className="h2 h2-list">List</h2>
      <div className="div div-list">
        <SimpleList />
        <Categories />
      </div>
    </section>
  )
}

export default List
