import Image from "next/image";

interface Employee {
  results: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    picture: {
      large: string;
    };
  }[];
}

const Teams = async () => {
  const response = await fetch("https://randomuser.me/api/?results=8");
  const employees: Employee = await response.json();

  return (
    <main>
      <div>
        <h1 className="pt-28 text-center font-bold text-4xl">
          Our Teams
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
      </div>


      <div className="flex flex-col items-center justify-center md:grid md:grid-cols-4 gap-8 md:px-10">
        {employees.results.map((employee, index) => (
          <div
            key={index}
            className="max-w-xs flex flex-col rounded overflow-hidden shadow-lg w-full items-center"
          >
            <div>
            <Image
              src={employee.picture.large}
              alt={`${employee.name.first} ${employee.name.last}`}
              width={300}
              height={300}
            />
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">{`${employee.name.first} ${employee.name.last}`}</div>
              <p className="text-gray-700 text-base">{employee.email}</p>
              <p className="text-gray-700 text-base">Phone: {employee.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Teams;
