import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className=" text-center text-xl font-semibold">
      <h1>
        The best pizza.
        <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;