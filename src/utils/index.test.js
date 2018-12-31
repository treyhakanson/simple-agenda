import { parseData } from "./parse";

const input = [
  ["MoWeFr", "education", "example education task"],
  ["MoWeFr", "learning", "example learning task"],
  ["TuTh", "work", "example work task", "9:00am-5:00pm"],
  ["SuSa", "personal", "example personal task"]
];

const theorhetical = [
  [
    {
      category: "personal",
      text: "example personal task",
      completed: false
    }
  ],
  [
    {
      category: "education",
      text: "example education task",
      completed: false
    },
    {
      category: "learning",
      text: "example learning task",
      completed: false
    }
  ],
  [
    {
      category: "work",
      text: "example work task",
      time: "9:00am-5:00pm",
      completed: false
    }
  ],
  [
    {
      category: "education",
      text: "example education task",
      completed: false
    },
    {
      category: "learning",
      text: "example learning task",
      completed: false
    }
  ],
  [
    {
      category: "work",
      text: "example work task",
      time: "9:00am-5:00pm",
      completed: false
    }
  ],
  [
    {
      category: "education",
      text: "example education task",
      completed: false
    },
    {
      category: "learning",
      text: "example learning task",
      completed: false
    }
  ],
  [
    {
      category: "personal",
      text: "example personal task",
      completed: false
    }
  ]
];

it("should parse correctly", () => {
  const actual = parseData(input);
  expect(actual).toEqual(theorhetical);
});
