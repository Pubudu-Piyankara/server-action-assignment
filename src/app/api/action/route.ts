async function serverAction(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) {
  try {
    console.log("This is server action printed on server console");
  } catch (error) {
    console.error("Error server action", error);
  }
}

export default serverAction;
