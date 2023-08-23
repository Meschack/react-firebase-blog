M ?= "..."

push:
	git config core.autocrlf true
	git add .
	git commit -m "$(M)"
	git push
	echo Recents commits was pushed successfully