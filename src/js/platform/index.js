const platform = {}

export const set = ({ controls, alarm }) => {
  platform.controls = controls;
  platform.alarm = alarm;
}

export default () => {
  return platform
}
