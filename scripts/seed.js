const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Programming Languages" },
        { name: "Web Development" },
        { name: "Mobile App Development" },
        { name: "Database Management" },
        { name: "DevOps" },
        { name: "Cloud Computing" },
        { name: "Cybersecurity" },
        { name: "Machine Learning and AI" },
        { name: "Software Testing" },
        { name: "Software Engineering Practices" },
        { name: "Game Development" },
        { name: "Version Control" },
        { name: "UI/UX Design" },
        { name: "Embedded Systems" },
        { name: "Blockchain and Cryptocurrency" },
        { name: "others" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
