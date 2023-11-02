export default function whenCreatedWas(date) {
  const postDate = new Date(date);
  const dateNow = new Date();

  const diffNowPost = Math.floor((dateNow - postDate) / 1000 / 60);

  let formattedDate;

  if (diffNowPost / 60 >= 24) {
    formattedDate = `postado há ${Math.floor(
      diffNowPost / 60 / 24
    )} dias atrás`;
  } else if (diffNowPost >= 60) {
    formattedDate = `postado há  ${Math.floor(diffNowPost / 60)} horas atrás`;
  } else {
    formattedDate = `postado há ${diffNowPost} minutos atrás`;
  }

  return formattedDate;
}
