document.querySelectorAll(".form-control label").forEach(label => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (char, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${char}</span>`
    )
    .join("");
});
