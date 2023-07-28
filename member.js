function skillsMember() {
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindtoController: true,
        scope: {
            member: 'm',

        }

    };
}