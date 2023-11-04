import json
# Specify the path to your JSON file
json_file_path = "syllabus.json"

# Open and read the JSON file
with open(json_file_path, "r") as json_file:
    data = json.load(json_file)

# Print the JSON data
content = data.get("content", {})
print(json.dumps(content, indent=4))  # Use indent for pretty printing

