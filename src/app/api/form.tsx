export default function Handler(req: any, res: any) {
    const body = req.body

    console.log('body: ', body)

    if(!body.fname || !body.lname){
        return res.status(400).json({data: 'First or last name not found!'});
    }

    res.status(200).json({data: `${body.first} ${body.last}`})
}