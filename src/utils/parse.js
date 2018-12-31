import moment from "moment";

export const CATEGORY = {
  WORK: "work",
  EDUCATION: "education",
  LEARNING: "learning",
  PERSONAL: "personal",
  FITNESS: "fitness"
};

export const CATEGORY_INFO = {
  [CATEGORY.WORK]: {
    emoji: "📊",
    color: "rgb(0, 117, 255)"
  },
  [CATEGORY.EDUCATION]: {
    emoji: "🎓",
    color: "rgb(188, 27, 208)"
  },
  [CATEGORY.LEARNING]: {
    emoji: "🔬",
    color: "rgb(18, 208, 122)"
  },
  [CATEGORY.PERSONAL]: {
    emoji: "🖌",
    color: "rgb(230, 20, 127)"
  },
  [CATEGORY.FITNESS]: {
    emoji: "🏀",
    color: "rgb(233, 165, 33)"
  }
};

export async function parseFile(file) {
  return await new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      const data = reader.result.split("\n").map((line) => line.split(","));
      resolve(data);
    }
    reader.readAsText(file);
  });
}

export function parseData(data) {
  let tasks = [];
  for (let i = 0; i < 7; i++) {
    tasks.push([]);
  }
  data.forEach(([dayStr, category, text, time]) => {
    dayStr.match(/\w{2}/g).forEach(day => {
      const i = moment(day, "dd").weekday();
      let task = {
        completed: false,
        category,
        text
      };
      if (time) {
        task.time = time;
      }
      tasks[i].push(task);
    });
  });
  return tasks;
}
