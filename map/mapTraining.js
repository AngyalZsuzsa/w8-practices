const list = [
    {id:1,
    name: "John",
    age: 33
    },
    {id:2,
    name: "Julia",
    age: 12
    },
    {id:3,
    name: "Alex",
    age: 45
    }
]

const result = []
for (const member of list) {
    if (member.age <= 18) {
        result.push("child")
    } else {
        result.push("adult")
    }
}
console.log(result)

function convert(member) {
    if (member.age <= 18) {
        return "child"
    } else {
        return "adult"
    }
}
const result2 = list.map(convert)

console.log(result2)
