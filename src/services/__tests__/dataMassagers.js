import { topLanguages } from "../dataMassagers";
import data from "../../sampleData";

it("produces array of top languages", () => {
  const langs = topLanguages(data.data.viewer.repositories);
  expect(langs).toEqual([
    { color: "#f1e05a", id: "JavaScript", label: "JavaScript", value: 3 },
    { color: "#563d7c", id: "CSS", label: "CSS", value: 3 },
    { color: "#e34c26", id: "HTML", label: "HTML", value: 3 },
    { color: "#701516", id: "Ruby", label: "Ruby", value: 2 }
  ]);
});
