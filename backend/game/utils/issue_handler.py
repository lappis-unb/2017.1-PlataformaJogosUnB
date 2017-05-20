import json
import requests
import re


class IssueHandler:

    def submit_issue(self, title, description, label, official_repository):
        session = self.get_session()
        issue = self.create_issue(title, description, label)
        url = self.create_url(official_repository)

        response = session.post(url, json.dumps(issue))
        SUCCESS_STATUS = 201

        if response.status_code == SUCCESS_STATUS:
            print('Successfully created Issue "{}"'.format(title))
        else:
            print('Could not create Issue "{}"' .fomart(title))
            print('Response: ', response.content)

    def create_url(self, official_repository):
        match_object = self.get_repo_owner_and_repo_name(official_repository)
        repo_owner = match_object.group(1)
        repo_name = match_object.group(2)

        url = 'https://api.github.com/repos/%s/%s/issues' % (repo_owner,
                                                             repo_name)
        return url

    def create_issue(self, title, description, label):
        issue = {'title': title,
                 'body': description,
                 'milestone': None,
                 'labels': [label]}

        return issue

    def get_repo_owner_and_repo_name(self, official_repository):
        match_object = re.search('https://github.com/(.+)/(.+)',
                                 official_repository)
        return match_object

    def get_session(self):
        session = requests.Session()
        session.auth = ('Username', 'Password')
        return session
