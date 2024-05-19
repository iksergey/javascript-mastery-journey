import os

def rename_files_in_directory(directory_path, prefix, extension):
    # Получаем список файлов в указанной директории
    files = os.listdir(directory_path)
    
    # Проходим по каждому файлу
    for file_name in files:
        # Проверяем, что файл имеет расширение .md
        if file_name.endswith('.md'):
            # Получаем номер задачи из имени файла
            task_number = file_name.split()[1].split('.')[0]
            
            # Создаем новое имя файла с префиксом и номером задачи
            new_file_name = f"{prefix}-{task_number}-js.{extension}"
            
            # Полный путь к старому файлу
            old_file_path = os.path.join(directory_path, file_name)
            # Полный путь к новому файлу
            new_file_path = os.path.join(directory_path, new_file_name)
            
            # Переименовываем файл
            os.rename(old_file_path, new_file_path)
            print(f"Файл {file_name} успешно переименован в {new_file_name}")

# Путь к директории с файлами
directory_path = "./"
# Префикс для новых имен файлов
prefix = "exercise"
# Расширение новых файлов
extension = "md"

# Вызываем функцию для переименования файлов
rename_files_in_directory(directory_path, prefix, extension)
