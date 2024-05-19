import os

def remove_text_from_files(directory_path, text_to_remove):
    # Получаем список файлов в указанной директории
    files = os.listdir(directory_path)
    
    # Проходим по каждому файлу
    for file_name in files:
        # Проверяем, что файл имеет расширение .md
        if file_name.endswith('.md'):
            # Полный путь к файлу
            file_path = os.path.join(directory_path, file_name)
            
            # Открываем файл для чтения и чтения/записи
            with open(file_path, 'r') as file:
                lines = file.readlines()
            
            # Удаляем строки, начиная с заданного текста
            modified_lines = []
            remove_next = False
            for line in lines:
                if text_to_remove in line:
                    remove_next = True
                if not remove_next:
                    modified_lines.append(line)
            
            # Записываем измененные строки обратно в файл
            with open(file_path, 'w') as file:
                file.writelines(modified_lines)
            print(f"Файл {file_name} обработан")

# Путь к директории с файлами
directory_path = "./"
# Текст, который нужно удалить (например, "### Python")
text_to_remove = "### Python"

# Вызываем функцию для удаления текста из файлов
remove_text_from_files(directory_path, text_to_remove)
