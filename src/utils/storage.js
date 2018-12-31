export const STORAGE_KEYS = {
  TASKS: "tasks",
  TASK_LOG: "task_log",
  WEEK_START: "week_start"
};

export function setValue(key, value, options = {}) {
  const { processor } = options;
  if (value && processor) {
    value = processor(value);
  }
  localStorage.setItem(key, value);
}

export function getValue(key, options = {}) {
  const { fallback, processor } = options;
  let value = localStorage.getItem(key);
  if (!value && fallback) {
    return fallback;
  } else if (value && processor) {
    value = processor(value);
  }
  return value;
}
