import os
import re

issue_body = open('issue_body.txt').read()

description_match = re.search(r'Repo Description', issue_body, re.MULTILINE)
repo_name_match = re.search(r'Repository Name', issue_body, re.MULTILINE)
visibility_match = re.search(r'Visibility', issue_body, re.MULTILINE)

description = description_match.group(1).strip() if description_match else ''
repo_name = repo_name_match.group(1).strip() if use_case_match else ''
visibility = visibility_match.group(1).strip() if additional_context_match else ''

print(f"::set-output name=description::{description}")
print(f"::set-output name=repo_name::{repo_name}")
print(f"::set-output name=visibility::{visibility}")
