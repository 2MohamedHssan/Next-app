function page(props) {
    console.log(props)
  return (
    <div>
        Test
        <h2>{props.params.title}</h2>
    </div>
  )
}

export default page
