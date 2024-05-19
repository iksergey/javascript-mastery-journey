```json
// Запускать код в терминале VS Code
"code-runner.runInTerminal": true, 
// Сохранять файл перед запуском
"code-runner.saveFileBeforeRun": true, 
 // Очищать предыдущий вывод перед запуском
"code-runner.clearPreviousOutput": true,
// Показывать сообщение выполнения с деталями
"code-runner.showExecutionMessage": true, 
// Запускать весь файл, даже если выбран фрагмент кода
"code-runner.ignoreSelection": true,
```
```json
"code-runner.executorMap": {
    "javascript": "clear && echo \">>> \"$fileName && cd $dir && node $fileName",
```