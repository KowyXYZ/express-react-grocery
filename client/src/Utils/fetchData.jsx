export const fetchData = async () => {
    let res = await fetch('http://localhost:5000/api')
    return res.json()
}